import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';

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
}

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
  street: { type: DataTypes.STRING, allowNull: false },
  zipcode: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize,
  tableName: 'contacts',
  timestamps: false,
});

export default Contact;
