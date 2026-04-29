import { Component, inject, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { InputComponent } from "../../components/input-component/input-component";
import { Button } from "../../components/button/button";
import { MatListModule } from '@angular/material/list';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IngredientRequest, IngredientResponse, ShoppingService } from '../../services/shopping.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-shopping-page',
  imports: [NavbarComponent, InputComponent, Button, MatListModule, FormsModule, ReactiveFormsModule],
  templateUrl: './shopping-page.html',
  styleUrl: './shopping-page.css',
})


export class ShoppingPage implements OnInit {

  ngOnInit(): void {
    this.onFetchIngredient();
  }


  Ingredients: IngredientResponse[] = [];

  private fb = inject(FormBuilder);

  IngredientForm = this.fb.nonNullable.group({
    Name: ['', Validators.required]
  })

  constructor(private shoppingService: ShoppingService,
              private cdr : ChangeDetectorRef
  ) { }



  onCreateIngredient() {
    console.log("Submit ok");

    const ingredient: IngredientRequest = this.IngredientForm.getRawValue();

    return this.shoppingService.createIngredient(ingredient).subscribe({
      next: (res) => {
        console.log("Création de l'ingrédient réussi", res);
      },
      error: (err) => {
        console.log("Erreur lors de la création de l'ingrédient", err);
      }
    });
  }

  onFetchIngredient() {
    return this.shoppingService.fetchAllIngredient().subscribe({
      next: (res) => {
        console.log("Liste des ingrédients : ", res);
        this.Ingredients = [...res];
        this.cdr.detectChanges();
      },
      error: (res) => {
        console.log("Erreur lors de la récupération des ingrédients");
      }
    })
  }

}
