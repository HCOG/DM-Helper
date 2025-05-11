import { AuthService, User } from './../auth-service/auth.service';
// src/app/services/login.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private auth: AuthService, private router: Router) {}

  login(username: string, password: string): boolean {
    const fakeUser: User = {
      username,
      role: username === 'dm' ? 'DM' : 'Player', // quick mock: dm = DM
      token: 'fake-jwt-token'
    };

    this.auth.setUser(fakeUser);
    this.router.navigate(['/rooms']);
    return true;
  }
}
