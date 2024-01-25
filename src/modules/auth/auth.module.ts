import {Global, Module} from '@nestjs/common';
//import {JwtModule, JwtService} from '@nestjs/jwt';
import { UsersController} from '@auth/controllers';
import { UsersService} from '@auth/services';
import { authProviders } from './providers/auth.providers';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import {JwtModule, JwtService} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Global()
@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt', session: false }),
        JwtModule.register({
            global: true,
          secret: '123', // Reemplaza con tu clave secreta
          signOptions: { expiresIn: '60s' }, // Opciones del token
        }),
    ],
    controllers: [UsersController, AuthController],
    providers: [...authProviders, UsersService, AuthService, JwtService],
    exports: [UsersService, AuthService, JwtService],
})
export class AuthModule {
}