import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IngredientRequest {
    name : String;
}

export interface IngredientResponse {
    name : String;
}

@Injectable({providedIn: 'root'})
export class ShoppingService {
    private baseUrl = ("http://localhost:8085/ingredient");

    constructor(private http : HttpClient) {}

    createIngredient(data : IngredientRequest) : Observable<IngredientResponse> {
        return this.http.post<IngredientResponse>(`${this.baseUrl}`, data);
    }
}