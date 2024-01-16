import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @SetMetadata('IS_PUBLIC', true)
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  @SetMetadata('IS_PUBLIC', true)
  signup(@Body() singupDto: SignupDto) {
    return this.authService.signup(singupDto);
  }
}
