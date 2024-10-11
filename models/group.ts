import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';
import Contact from './contact';

class Group extends Model {
  public id!: number;
  public name!: string;
}

export default Group;