import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {IoCtl } from "./ioctl.entity";
import {IoctlService} from "./ioctl.service";
import {IoCtlController} from "./ioctl.controller";
import { MinmaxDelta } from "./deltaminmax.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([IoCtl, MinmaxDelta]),
    ],
    controllers: [IoCtlController],
    providers: [IoctlService]
})

export class IoCtlModule {}