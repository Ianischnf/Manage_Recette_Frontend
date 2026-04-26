import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { InputComponent } from "../../components/input-component/input-component";
import { Button } from "../../components/button/button";
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-shopping-page',
  imports: [NavbarComponent, InputComponent, Button, MatListModule],
  templateUrl: './shopping-page.html',
  styleUrl: './shopping-page.css',
})
export class ShoppingPage {}
