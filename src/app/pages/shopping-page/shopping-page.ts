import { Component, inject, Injectable } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { InputComponent } from "../../components/input-component/input-component";
import { Button } from "../../components/button/button";
import {MatListModule} from '@angular/material/list';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IngredientRequest, ShoppingService } from '../../services/shopping.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-page',
  imports: [NavbarComponent, InputComponent, Button, MatListModule, FormsModule, ReactiveFormsModule],
  templateUrl: './shopping-page.html',
  styleUrl: './shopping-page.css',
})

@Injectable({providedIn: 'root'})
export class ShoppingPage {

  private fb = inject(FormBuilder);

  IngredientForm = this.fb.nonNullable.group({
    name: ['', Validators.required]
  })

  constructor(private shoppingService : ShoppingService) {}

  onCreateIngredient() {
    console.log("Submit ok"); 
    
    const ingredient : IngredientRequest = this.IngredientForm.getRawValue();

    return this.shoppingService.createIngredient(ingredient).subscribe({
      next : (res) => {
        console.log("Création de l'ingrédient réussi", res);
      },
      error : (err) => {
        console.log("Erreur lors de la création de l'ingrédient", err);
      }
    })

  }
}
