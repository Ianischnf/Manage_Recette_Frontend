import { Component } from '@angular/core';
import { Button } from "../../components/button/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-page',
  imports: [Button, RouterLink],
  standalone: true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
