import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/auth/constant';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  async use(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers['authorization'];
    console.log("Authorization Header:", authHeader);

    if (authHeader) {
      const token = authHeader.split(' ')[1]; // Assuming 'Bearer <token>'
      try {
        // Verify token (You need to provide the secret or public key)
        const decoded = jwt.verify(token, jwtConstants.secret);
        console.log('Token verified successfully:', decoded);
        next();
      } catch (err) {
        console.log('Invalid or expired token:', err.message);
        throw new UnauthorizedException("Invalid or expired token");
      }
    } else {
      console.log('No token provided');
      throw new UnauthorizedException("The User has been Logged Out");
    }
  }
}