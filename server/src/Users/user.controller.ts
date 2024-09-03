import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './user/dtos/create-user.dto';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private authService: AuthService
    ) {}

    @Post('/signin')
    create(@Body() body: CreateUserDto) {
        return this.authService.signin(body)
    }
}
