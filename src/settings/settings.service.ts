import { Injectable } from '@nestjs/common';
import { Setting } from './settings.entity';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Setting)
    private settingModel: typeof Setting,
  ) {}

  async findAll() {
    return await this.settingModel.findAll();
  }

  async findOne(id: number) {
    const setting = await this.settingModel.findByPk(id);
    if (!setting) {
      throw new Error('No setting exists corresponding to this id.');
    }
    return setting;
  }

  async create(createSettingDto: CreateSettingDto): Promise<Setting> {
    console.log(createSettingDto);
    const setting = await this.settingModel.create({
      ...createSettingDto,
    });
    console.log(
      `This is the name getter output using setting.name: ${setting.name}`,
    );
    return setting;
  }

  async update(
    id: number,
    updateSettingDto: UpdateSettingDto,
  ): Promise<Setting> {
    const setting = await this.settingModel.findByPk(id);
    console.log(setting.name);
    if (!setting) {
      throw new Error('No setting exists corresponding to this id.');
    }
    return setting.update({ ...updateSettingDto });
  }

  async delete(id: number): Promise<number> {
    const setting = await this.settingModel.findByPk(id);
    if (!setting) {
      throw new Error('No setting exists corresponding to this id.');
    }
    setting.destroy();
    return id;
  }
}
