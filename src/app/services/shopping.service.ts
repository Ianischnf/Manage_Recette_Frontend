import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IngredientRequest {
    Name: string;
}

export interface IngredientResponse {
    IngredientId: string;
    Name: string;
}

export interface ShoppingListRequest {
    Name: string;
}

export interface ShoppingListResponse {
    ShoppingListId: number,
    Name: string;
}

export interface IngredientToShoppingListRequest {
    ingredientId : number
    quantity: number;
    unit: string
}

export interface IngredientToShoppingListResponse {
    shoppingListId: number;
    ingredientId: number;
    quantity: number;
    unit: string;
}

@Injectable({ providedIn: 'root' })
export class ShoppingService {
    private baseUrl = ("http://localhost:8085");


    constructor(private http: HttpClient) { }

    //endpoint pour créer une liste de course
    createShoppingList(data: ShoppingListRequest): Observable<ShoppingListResponse> {
        return this.http.post<ShoppingListResponse>(`${this.baseUrl}/shopping`, data);
    }

    //endpoint pour ajouté un ingrédient à la liste de course
    addIngredientToShoppingList(ShoppingListId: number, data: IngredientToShoppingListRequest): Observable<IngredientToShoppingListResponse> {
        return this.http.post<IngredientToShoppingListResponse>(`${this.baseUrl}/shopping/${ShoppingListId}/items`, data);
    }

    createIngredient(data: IngredientRequest): Observable<IngredientResponse> {
        return this.http.post<IngredientResponse>(`${this.baseUrl}/ingredient`, data);
    }

    fetchAllIngredient(): Observable<IngredientResponse[]> {
        return this.http.get<IngredientResponse[]>(`${this.baseUrl}/ingredient`);
    }



}