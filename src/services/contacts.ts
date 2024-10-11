import { Request, Response } from "express";
import { Contact, Group } from "../../models";
import { handleResponseError } from "../helpers/errorHandler";
import { GroupType } from "../types/groupType";

export const createContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const contact = await Contact.create(req.body);
        console.log({ contact, body: req.body })
        if (req.body.groups && req.body.groups.length) {
            try {
                await addContactToGroups(contact.id, req.body.groups.map((group: GroupType) => group.id));
                res.status(201).json(contact);
            } catch (err: any) {
                handleResponseError(res, err, 500, 'Contact created but failed to add groups');
            }
        } else {
            res.status(201).json(contact);
        }
    } catch (err: any) {
        handleResponseError(res, err);
    }
}

export const getAllContacts = async (req: Request, res: Response): Promise<void> => {
    try {
        const contacts = await Contact.findAll({
            include: {
                model: Group,
                as: 'groups',
                attributes: ['id', 'name'],
                through: { attributes: [] },
            }
        });
        res.status(200).json(contacts);
    } catch (err: any) {
        handleResponseError(res, err);
    }
}

export const updateContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        const contactGroups = await contact?.getGroups();
        if (!contact) {
            res.status(404).json({ message: 'Contact not found' });
            return;
        }
        await contact.update(req.body);
        console.log(contactGroups?.length)
        if (req.body.groups && req.body.groups.length) {
            try {
                await addContactToGroups(contact.id, req.body.groups.map((group: GroupType) => group.id));
                res.status(200).json(contact);
            } catch (err: any) {
                handleResponseError(res, err, 500, 'Contact updated but failed to add groups');
            }
        } else if (contactGroups?.length) {
            //If the contact has groups but the update doesn't - remove groups
            console.log("we got here fine")
            try {
                removeContactFromGroups(contact, contactGroups.map(contactGroup => contactGroup.id));
                res.status(200).json(contact);
            } catch(error) {
                handleResponseError(res, error, 500, 'Could not remove groups')
            }
        } else {
            res.status(200).json(contact);
        }
    } catch (err: any) {
        handleResponseError(res, err);
    }
}

export const deleteContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            res.status(404).json({ message: 'Contact not found' });
            return;
        }
        await contact.destroy();
        res.status(200).json({ message: 'Contact deleted' });
    } catch (err: any) {
        handleResponseError(res, err);
    }
}
export const addContactToGroups = async (contactId: number, groupIds: number[]) => {
    const contact = await Contact.findByPk(contactId, { include: { model: Group, as: 'groups' } });
    const groups = await Group.findAll({ where: { id: groupIds } });
    const contactGroups = await contact?.getGroups()

    if (contact && groups) {
        try {
            groups.forEach(async (group) => {
                if (!contactGroups?.some(contactGroup => group.id === contactGroup.id)) {
                    await contact.addGroup(group);
                }
            })
            contactGroups?.forEach(async (contactGroup) => {
                if (!groups.some((group) => group.id === contactGroup.id)) {
                    await contact.removeGroup(contactGroup);
                }
            })
        } catch (error) {
            return error;
        }
        console.log(`Contact ${contactId} added to groups ${groupIds}`);
    } else {
        return
    }
}

export const removeContactFromGroups = async (contact: Contact, groupIds: number[]) => {
    try {
        groupIds.forEach(async (groupId) => {
            await contact.removeGroup(groupId)
        })
    } catch (error) {
        return error
    }
}