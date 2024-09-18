import {
  IsString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';
import { data_type_enum } from '../../constants/datatype.enum';

export class CreateSettingDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(data_type_enum)
  data_type: data_type_enum;

  @IsNumber()
  account_id: number;

  //   @ValidateIf((o) => o.data_type === data_type_enum.STRING)
  //   @IsString()
  //   @IsNotEmpty()
  //   stringValue?: string;

  //   @ValidateIf((o) => o.data_type === data_type_enum.NUMBER)
  //   @IsNumber()
  //   @Type(() => Number)
  //   numberValue?: number;

  //   @ValidateIf((o) => o.data_type === data_type_enum.BOOLEAN)
  //   @IsBoolean()
  //   @Type(() => Boolean)
  //   booleanValue?: boolean;

  //   @ValidateIf((o) => o.data_type === data_type_enum.JSON)
  //   @IsString()
  //   @IsNotEmpty()
  //   jsonValue?: string;
}
