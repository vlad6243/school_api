import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Model } from 'sequelize-typescript';
import { DbService } from './db.service';
import configs from 'src/configs';

import { User } from './models/user.entity';

const modelsArray = [
  User
]

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...configs.providers.db,
      models: modelsArray,
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
