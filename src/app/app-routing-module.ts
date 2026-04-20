import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';

const routes: Routes = [
  {path: '', component: LoginPage},
  {path: '/register', component: RegisterPage},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, RouterModule.forRoot(routes)],
})


export class AppRoutingModule {



}
