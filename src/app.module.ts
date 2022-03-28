import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { UserModule } from 'src/modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { DbModule } from './shared/db/db.module';

@Module({
  imports: [
    DbModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
