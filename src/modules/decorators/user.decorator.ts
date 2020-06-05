import { createParamDecorator } from "@nestjs/common";

export const UserDecor = createParamDecorator((data, req) => req.user)