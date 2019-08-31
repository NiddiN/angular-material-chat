import { Injectable } from '@angular/core';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  public signIn(inputUser: User): void {
    localStorage.setItem('ChatUsername', inputUser.username);
    this.user = inputUser;
  }
}
