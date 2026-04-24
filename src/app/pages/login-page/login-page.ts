import { Component, inject } from '@angular/core';
import { Button } from "../../components/button/button";
import { RouterLink } from "@angular/router";
import { InputComponent } from '../../components/input-component/input-component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest, UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  imports: [Button, RouterLink, InputComponent, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  private fb = inject(FormBuilder);

  LoginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private userService : UserService) {}

  

 onLogin(){

  const login : LoginRequest = this.LoginForm.getRawValue();

  this.userService.Login(login).subscribe({
    next: (res) => {
      console.log("Connexion réussi", res);
    },

    error: (err) => {
      console.log("Erreur de connexion", err);
    }
  })
 }

}
