import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: any = null;
  private token: string | null = null;

  get(): string | null {
    return this.userName;
  }

  set(userName: string): void {
    this.userName = userName;
  }

}
