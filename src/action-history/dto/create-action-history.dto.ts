export class CreateActionHistoryDto {
  readonly deviceId: number;

  //   @IsEmail()
  readonly action: number;

  //   @IsString()
  readonly create_at: Date;
}
