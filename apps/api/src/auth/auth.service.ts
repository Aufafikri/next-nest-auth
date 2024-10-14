import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    public async registerUser(createUserDto: CreateUserDto) {
        const user = this.userService.findByEmail(createUserDto.email)
        if (user) throw new ConflictException('user already exist!')
            return this.userService.create(createUserDto)
    }
}
