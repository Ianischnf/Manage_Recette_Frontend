import { Component } from '@angular/core';
import { Button } from "../../components/button/button";

@Component({
  selector: 'app-login-page',
  imports: [Button],
  standalone: true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
