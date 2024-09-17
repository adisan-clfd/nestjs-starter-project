import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database.providers';
import { AccountsModule } from './accounts/accounts.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [AccountsModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
