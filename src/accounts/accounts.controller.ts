import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    try {
      const account = await this.accountsService.create(createAccountDto);
      return account;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Get()
  async findAll() {
    try {
      const allAccounts = await this.accountsService.findAll();
      return allAccounts;
    } catch (err) {
      throw new Error(err);
    }
  }
}
