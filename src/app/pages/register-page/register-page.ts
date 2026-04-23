import { Component, inject } from '@angular/core';
import { InputComponent } from "../../components/input-component/input-component";
import { Button } from "../../components/button/button";
import { UserRequest, UserService, } from '../../services/user.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [InputComponent, Button, ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  private fb = inject(FormBuilder);

  RegisterForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });



  constructor(
    private userService: UserService,
  ) { }

  onCreateUser() {

    if (this.RegisterForm.invalid) {
      this.RegisterForm.markAllAsTouched();
    }

    const user: UserRequest = this.RegisterForm.getRawValue();

    this.userService.createUser(user).subscribe({
      next: (res) => {
        console.log("Inscription réussi");
      },
      error: (err) => {
        console.log("Erreur lors de l'inscription", err);
      }
    })
  }
}