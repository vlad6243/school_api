import { Body, Controller, Post } from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto'

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Sign in to application'})
    @ApiResponse({status: 200, type: String})
    @Post('/login')
    async login(@Body() userDto: CreateUserDto) {
        return await this.authService.login(userDto);
    }

    @ApiOperation({summary: 'Sign up to application'})
    @ApiResponse({status: 200, type: Object})
    @Post('/registration')
    async registration(@Body() userDto: CreateUserDto) {
        return await this.authService.registration(userDto);
    }
}
