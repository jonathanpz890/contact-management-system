import { BelongsToManyAddAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, Model } from 'sequelize';
import Group from './group';

class Contact extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public country!: string;
    public city!: string;
    public street!: string;
    public zipcode!: string;
    public phone!: string;
    public email!: string;

    public addGroup!: BelongsToManyAddAssociationMixin<Group, number>;
    public getGroups!: BelongsToManyGetAssociationsMixin<Group>;  
    public removeGroup!: BelongsToManyRemoveAssociationMixin<Group, number>;  
}

export default Contact;
