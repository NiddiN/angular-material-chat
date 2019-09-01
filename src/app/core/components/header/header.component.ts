import { Component } from '@angular/core';
import { UserService } from '@services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private userService: UserService) { }

  public signOut(): void {
    this.userService.signOut();
  }
}
