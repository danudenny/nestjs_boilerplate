import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        return true;
    }

    handleRequest(err, user, info) {
        if (user && user.roles == 'admin') {
            return user;
        }
        throw new HttpException('Unauthorized Access! Only administrator!', HttpStatus.UNAUTHORIZED)

    }
}