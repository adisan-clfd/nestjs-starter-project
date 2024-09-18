import { Injectable, Inject } from '@nestjs/common';
import { Setting } from './settings.entity';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingsService {
  constructor(
    @Inject(Setting)
    private settingModel: typeof Setting,
  ) {}

  async findAll() {
    return await this.settingModel.findAll();
  }

  async findOne(id: number) {
    const setting = await this.settingModel.findByPk(id);
    return setting;
  }

  async create(createSettingDto: CreateSettingDto): Promise<Setting> {
    const setting = await this.settingModel.create({
      ...createSettingDto,
    });
    return setting;
  }

  async update(
    id: number,
    updateSettingDto: UpdateSettingDto,
  ): Promise<Setting> {
    const setting = await this.settingModel.findByPk(id);
    return setting.update({ ...updateSettingDto });
  }

  async delete(id: number): Promise<void> {
    const setting = await this.settingModel.findByPk(id);
    return setting.destroy();
  }
}
