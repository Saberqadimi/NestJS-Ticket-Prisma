import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth-jwtPayloads';
import * as argon2 from "argon2";
import { CurrentUser } from './types/current-user';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { LoginResponseDto } from './dto/login-response.dto';


@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);

        if (!user) throw new UnauthorizedException('User not found!');

        const isPasswordMatched = await compare(password, user.password);
        if (!isPasswordMatched) throw new UnauthorizedException("Invalid Credentials");

        return { id: user.id };
    }


    async login(userId: number): Promise<LoginResponseDto> {
        const { access_token } = await this.generateTokens(userId);
        return { id: userId, access_token };
    }
    

    async generateTokens(userId: number) {
        const payload: AuthJwtPayload = { sub: userId };
        const [access_token] = await Promise.all([
            this.jwtService.signAsync(payload),
        ]);

        return {
            access_token,
        }
    }

    async validateJwtUser(userId: number) {
        const user = await this.userService.findOne(userId);
        if (!user) throw new UnauthorizedException("User not Found!");

        const currentUser: CurrentUser = { id: user.id, role: user.role }

        return currentUser;
    }
}
