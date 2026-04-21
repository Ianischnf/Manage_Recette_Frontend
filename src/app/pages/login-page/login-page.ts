import { Component } from '@angular/core';
import { Button } from "../../components/button/button";
import { RouterLink } from "@angular/router";
import { InputComponent } from '../../components/input-component/input-component';

@Component({
  selector: 'app-login-page',
  imports: [Button, RouterLink, InputComponent],
  standalone: true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
