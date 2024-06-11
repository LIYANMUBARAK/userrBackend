import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { loginFormDto } from './dto/loginFormDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  loginUser(@Body() loginForm: loginFormDto) {
    return this.appService.loginUser(loginForm)
  }

  
}
