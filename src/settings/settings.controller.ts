import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { SettingsService } from './settings.service';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  async create(@Body() createSettingDto: CreateSettingDto) {
    try {
      const newSetting = await this.settingsService.create(createSettingDto);
      return newSetting;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Get()
  async findAll() {
    return this.settingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.settingsService.findOne(Number.parseInt(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, updateSettingDto: UpdateSettingDto) {
    try {
      const updateSetting = await this.settingsService.update(
        Number.parseInt(id),
        updateSettingDto,
      );
      return updateSetting;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      await this.settingsService.delete(+id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
