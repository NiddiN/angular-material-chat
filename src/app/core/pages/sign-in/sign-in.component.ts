import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '@services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.signInForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZА-Яа-я]*$/)
        ]
      ]
    });
  }

  public submit(): void {
    this.userService.signIn(this.signInForm.value);
  }

  public isInvalidForm(): boolean {
    return this.signInForm.invalid;
  }
}
