import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { SettingsModule } from './settings/settings.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthGuard } from './accounts/auth.guard';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'adisan',
      password: 'password',
      database: 'mock_db',
      autoLoadModels: true,
      synchronize: true,
    }),
    AccountsModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
