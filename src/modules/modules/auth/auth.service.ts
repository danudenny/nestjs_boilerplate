import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { JwtService } from "@nestjs/jwt";
import { User, UserLogin } from "../users/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async createToken(user: User) {
        return {
          expiresIn: 3660,
          accessToken: this.jwtService.sign({id: user.id}),
          user: user
        };
      }
    
    async validateUser(payload: UserLogin): Promise<any> {
      const user = await this.userService.getByEmailAndPass(payload.email, payload.password);
      if (!user) {
        throw new UnauthorizedException('Wrong login combination!');
      }
      return user;
    }

}