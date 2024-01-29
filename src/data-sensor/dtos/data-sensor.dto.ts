// create-user.dto.ts

// import { IsString, IsEmail } from 'class-validator';

export class DataSensorDto {
  //   @IsString()
  readonly temperature: number;

  //   @IsEmail()
  readonly humb: number;

  //   @IsString()
  readonly light: number;
  readonly create_at: Date;
}
