import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    try {
      const account = await this.accountsService.create(createAccountDto);
      return account;
    } catch (error) {
      throw new Error(error);
    }
  }
}
