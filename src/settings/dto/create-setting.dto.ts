import { IsString, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { data_type_enum } from '../../constants/datatype.enum';

export class CreateSettingDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(data_type_enum)
  data_type: data_type_enum;

  @IsNumber()
  account_id: number;
}
