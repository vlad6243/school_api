import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/shared/db/models/user.entity';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User) 
        private userRepository: typeof User,
    ){}

    async createUser(userDto: CreateUserDto) {
        return await this.userRepository.create(userDto);
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: {email}, include: {all: true}});
    }

    async disableUser(id: number) {
        const user = await this.userRepository.findByPk(id);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        user.isActive = false;
        return await user.save();
    }

    async getAllUsers() {
        return await this.userRepository.findAll();
    }

    updateUser() {

    }
}
