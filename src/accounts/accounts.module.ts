import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity';

@Module({
  imports: [],
  controllers: [AccountsController],
  providers: [AccountsService, Account],
  exports: [AccountsService],
})
export class AccountsModule {}
