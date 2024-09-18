import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { Setting } from './settings.entity';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService, Setting],
  exports: [SettingsService],
})
export class SettingsModule {}
