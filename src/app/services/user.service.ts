import { Injectable } from '@angular/core';
import { User } from '@interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(private router: Router) { }

  public get username(): string {
    return this.user ? this.user.username : this.getUserFormStorage();
  }

  public signIn(inputUser: User): void {
    localStorage.setItem('ChatUsername', inputUser.username);
    this.user = inputUser;
    this.router.navigate(['/']);
  }

  public signOut(): void {
    localStorage.removeItem('ChatUsername');
    this.user = null;
    this.router.navigate(['sign-in']);
  }

  public isAuth(): boolean {
    return !!this.getUserFormStorage();
  }

  private getUserFormStorage(): string {
    this.user = {
      username: localStorage.getItem('ChatUsername')
    };
    return this.user.username;
  }
}
