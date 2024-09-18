import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { Setting } from './settings.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Setting])],
  controllers: [SettingsController],
  providers: [SettingsService, Setting],
  exports: [SettingsService],
})
export class SettingsModule {}
