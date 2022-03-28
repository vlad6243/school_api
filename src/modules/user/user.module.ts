import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../shared/db/models/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    forwardRef(() => AuthModule),
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
