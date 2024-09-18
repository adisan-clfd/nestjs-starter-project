import { Injectable } from '@nestjs/common';
import { Account } from './accounts.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const hashedPassword = await bcrypt.hash(createAccountDto.password, 10);
    const account = await this.accountModel.create({
      ...createAccountDto,
      password: hashedPassword,
    });
    return account;
  }

  async findOne(id: number): Promise<Account> {
    return this.accountModel.findByPk(id);
  }

  async findAll(): Promise<Account[]> {
    return this.accountModel.findAll();
  }

  async validateAccount(name: string, password: string): Promise<Account> {
    const account = await this.accountModel.findOne({ where: { name } });
    if (!account) {
      throw new Error("Invalid credentials as account doesn't exist.");
    }
    console.log(password);
    console.log(account.password);
    const isPasswordValid = await bcrypt.compare(password, account.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials!');
    }
    return account;
  }
}
