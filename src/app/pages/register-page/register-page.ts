import { Component } from '@angular/core';
import { InputComponent } from "../../components/input-component/input-component";
import { Button } from "../../components/button/button";
import { UserRequest, UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  imports: [InputComponent, Button],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  form: UserRequest = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private userService : UserService) {}

  onCreateUser() {
    this.userService.createUser(this.form).subscribe({
      next: (res) => {
        console.log("Inscription réussi");
      },

      error: (err) => {
        console.log("Erreur lors de l'inscription", err);
      }
    })
  }
}
