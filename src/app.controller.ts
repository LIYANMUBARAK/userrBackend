import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { loginFormDto } from './dto/loginFormDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  loginUser(@Body() loginForm: loginFormDto) {
    return this.appService.loginUser(loginForm)
  }

  @Get('getUser/:phonenumber')
  getUser(@Param('phoneNumber') phoneNumber: any) {

    return this.appService.getUser(phoneNumber)
  }
  
}
