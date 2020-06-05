import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {IoCtl} from "./ioctl.entity";
import {IoctlService} from "./ioctl.service";
import {IoCtlController} from "./ioctl.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([IoCtl])
    ],
    controllers: [IoCtlController],
    providers: [IoctlService]
})

export class IoCtlModule {}