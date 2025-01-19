import { IsEmail, IsString } from 'class-validator';

export class SignupDto {
  @IsString()
  name: string;
  @IsString()
  password: string;
}
