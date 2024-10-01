import { Account } from '../accounts/accounts.entity.js';
import { data_type_enum, dataTypeEnumValues } from '../constants/datatype.enum';
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';
import { isEmpty } from 'lodash';

const encrypt = (str, key = process.env.ENCRYPTION_KEY || "bruhajajflsjdflkjakdjfskdljfksdj") => {
  if (isEmpty(str)) {
    return '';
  }
  const iv = randomBytes(16);
  const cipher = createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(str);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

const decrypt = (encrypted) => {
  try {
    if (isEmpty(encrypted)) {
      return '';
    }
    const textParts = encrypted.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = createDecipheriv(
      'aes-256-cbc',
      Buffer.from(process.env.ENCRYPTION_KEY || "bruhajajflsjdflkjakdjfskdljfksdj"),
      iv,
    );
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  } catch (_) {
    // decryption will fail for invalid encrypted string
    return '';
  }
};

@Table({
  tableName: 'setting',
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
  get name(): string {
    return decrypt(this.getDataValue('name'));
  }
  set name(n: string) {
    const encryptedName = encrypt(n);
    console.log(
      `This is the name setter output which is encrypted: ${encryptedName}`,
    );
    this.setDataValue('name', encryptedName);
  }

  @Column({
    type: DataType.ENUM(...dataTypeEnumValues),
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
