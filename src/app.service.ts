import { Injectable } from '@nestjs/common';
import { loginFormDto } from './dto/loginFormDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  
  constructor(
    private jwtService: JwtService
  ) {}

 async loginUser(loginForm:loginFormDto){
    try {
      let {name,password} = loginForm
      if(name=="liyan"&&password=="Liyan@123"){
        const payload = { name:name};
         
         var token= await this.jwtService.signAsync(payload)
         console.log(token)
         return {name:name,token:token}
      }
    } catch (error) {
      
    }
  }

}
