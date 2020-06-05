import { ZonaModule } from './modules/components/zona/zona.module';
import { MailModule } from './modules/components/mail/mail.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/components/users/users.module';
import { AuthModule } from './modules/components/auth/auth.module';
import { ClientModule } from './modules/components/clients/client.module';
import { DeviceModule } from './modules/components/device/device.module';
import { PanelModule } from './modules/components/panels/panel.module';
import { BillingModule } from './modules/components/billing/billing.module';
import { ClusterService } from './modules/__utils/cluster.service';
import {IoCtlModule} from "./modules/components/ioctl/ioctl.module";

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      UserModule,
      AuthModule,
      ClientModule,
      DeviceModule,
      PanelModule,
      MailModule,
      BillingModule,
      ZonaModule,
      IoCtlModule
  ],
  controllers: [],
  providers: [
    ClusterService
  ],
})
export class AppModule {}
