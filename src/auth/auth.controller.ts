import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {

  }


  @Post('/signup')
  signup(@Body() body: SignupDto) {
    this.authService.signup(body.name, body.password)
  }
}
