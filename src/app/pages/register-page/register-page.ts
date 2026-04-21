import { Component } from '@angular/core';
import { InputComponent } from "../../components/input-component/input-component";
import { Button } from "../../components/button/button";

@Component({
  selector: 'app-register-page',
  imports: [InputComponent, Button],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {}
