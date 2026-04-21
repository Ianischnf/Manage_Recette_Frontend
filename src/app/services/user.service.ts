import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface UserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserResponse {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface User {

}

@Injectable({providedIn: 'root'})
export class UserService {
    private baseUrl = ("http://localhost:8085");

    constructor(private http: HttpClient) {}

    createUser(data : UserRequest): Observable<any> {
        return this.http.post(`${this.baseUrl}`, data);
    }
}