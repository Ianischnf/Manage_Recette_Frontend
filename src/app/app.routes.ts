import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  { path: '', component: LoginPage, pathMatch: 'full' },
  { path: 'register', component: RegisterPage },
  { path: 'home', component: HomePage}
];