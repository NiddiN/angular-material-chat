import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@interfaces';

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
    localStorage.setItem('chatUsername', inputUser.username);
    this.user = inputUser;
    this.router.navigate(['/']);
  }

  public signOut(): void {
    localStorage.removeItem('chatUsername');
    this.user = null;
    this.router.navigate(['sign-in']);
  }

  public isAuth(): boolean {
    return !!this.getUserFormStorage();
  }

  private getUserFormStorage(): string {
    this.user = {
      username: localStorage.getItem('chatUsername')
    };
    return this.user.username;
  }
}
