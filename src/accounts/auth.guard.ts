import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private accountsService: AccountsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { name, password } = request.headers;
    const { account_id } = request.body;

    if (!name || !password || !account_id) {
      throw new Error('Missing credentials');
    }

    try {
      const account = await this.accountsService.validateAccount(
        name,
        password,
      );
      if (account.id !== Number.parseInt(account_id)) {
        throw new Error('Invalid account ID');
      }
      request.account = account;
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }
}
