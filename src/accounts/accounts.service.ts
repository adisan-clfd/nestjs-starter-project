import { Injectable, Inject } from '@nestjs/common';
import { Account } from './accounts.entity';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
  constructor(
    @Inject(Account)
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
}
