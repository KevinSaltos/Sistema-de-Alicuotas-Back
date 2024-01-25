// canActivate-jwt.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    console.log(token)
    if (token) {
      try {
        const decoded = this.jwtService.verify(token);
        request.user = decoded; // Añade el usuario decodificado al objeto de solicitud
        return true;
      } catch (error) {
        return false;
      }
    }

    return false;
  }
}
