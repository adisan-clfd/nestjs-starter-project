import { Injectable } from '@nestjs/common';
import { Account } from './accounts.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account = await this.accountModel.create({
      ...createAccountDto,
    });
    return account;
  }

  async findOne(id: number): Promise<Account> {
    return this.accountModel.findByPk(id);
  }

  async findAll(): Promise<Account[]> {
    return this.accountModel.findAll();
  }
}
