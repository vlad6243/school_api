import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { JwtAuthGuard } from 'src/modules/auth/auth.guard';
import { UserService } from "./user.service";
import { User } from 'src/shared/db/models/user.entity';

@ApiTags('Users')
@Controller('user')
export class UserController {

    constructor(
        private readonly userservice: UserService
    ){}

    @ApiOperation({summary: 'Getting all users from the database'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get('/allUsers')
    async getUsers() {
        return await this.userservice.getAllUsers();
    }
}
