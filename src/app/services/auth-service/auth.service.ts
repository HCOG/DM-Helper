// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  username: string;
  role: 'Player' | 'DM';
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    const stored = localStorage.getItem('user');
    if (stored) this.userSubject.next(JSON.parse(stored));
  }

  setUser(user: User) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }

  get isDM(): boolean {
    return this.currentUser?.role === 'DM';
  }
}
