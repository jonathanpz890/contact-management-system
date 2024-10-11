import { DataTypes, Sequelize } from 'sequelize';
import Contact from './contact';
import Group from './group';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = config.url
    ? new Sequelize(config.url, config)
    : new Sequelize(config.database, config.username, config.password, config);

Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    street: { type: DataTypes.STRING, allowNull: true },
    zipcode: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: true },
}, {
    sequelize,
    tableName: 'contacts',
    timestamps: false,
});

Group.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'groups',
    timestamps: false,
});


Contact.belongsToMany(Group, { through: 'ContactGroups', as: 'groups' });
Group.belongsToMany(Contact, { through: 'ContactGroups', as: 'contacts' });

export { Sequelize, sequelize, Contact, Group };