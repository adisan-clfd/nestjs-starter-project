import { Account } from './accounts/accounts.entity.js';
import { data_type_enum } from './datatype.enum';
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'settings',
  timestamps: true,
  paranoid: true,
})
export class Setting extends Model<Setting> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.ENUM,
    allowNull: false,
  })
  data_type: data_type_enum;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  account_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  value: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt: Date;
}
