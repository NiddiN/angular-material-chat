import { Injectable } from '@angular/core';
import { User } from '@interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(private router: Router) { }

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
}
