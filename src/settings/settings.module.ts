import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { Setting } from './settings.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  imports: [SequelizeModule.forFeature([Setting]), AccountsModule],
  controllers: [SettingsController],
  providers: [SettingsService],
  exports: [SettingsService],
})
export class SettingsModule {}
