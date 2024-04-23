import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly productKey = 'products';
  
  constructor() { }

  saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User | null {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  deleteUser(): void {
    localStorage.removeItem('user');
  }
}