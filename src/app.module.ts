import { UserService } from './modules/modules/users/user.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/modules/users/users.module';
import { AuthModule } from './modules/modules/auth/auth.module';
import { ClientModule } from './modules/modules/clients/client.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DeviceModule } from './modules/modules/device/device.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'uploads'),
    }),
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
    ClientModule,
    DeviceModule
  ],
  controllers: [AppController],
  providers: [
        UserService, AppService],
})
export class AppModule {}
