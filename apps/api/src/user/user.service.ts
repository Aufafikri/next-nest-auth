import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'argon2';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createUserDto: CreateUserDto) {
        const { password, ...user } = createUserDto
        const hashedPassword = await hash(password)

        return await this.prisma.users.create({
            data: {
                password: hashedPassword,
                ...user
            }
        })
    }

    public async findByEmail(email: string) {
        return this.prisma.users.findUnique({
            where: {
                email
            }
        })
    }
}
