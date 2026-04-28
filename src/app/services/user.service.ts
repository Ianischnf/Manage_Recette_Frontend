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

    export interface LoginRequest {
        email : string;
        password: string;
    }

    export interface LoginResponse {
        token: string;
    }



    @Injectable({providedIn: 'root'})
    export class UserService {
        private baseUrl = ("http://localhost:8085");
        private readonly TOKEN_KEY = 'token';

        constructor(private http: HttpClient) {}

        //Enregistre token
        setToken(token: string): void{
            localStorage.setItem(this.TOKEN_KEY, token)
        }

        getToken(): string | null {
            return localStorage.getItem(this.TOKEN_KEY);
        }

        createUser(data : UserRequest): Observable<any> {
            return this.http.post(`${this.baseUrl}`, data);
        }

        Login(data: LoginRequest): Observable<LoginResponse> {
            return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, data);
        }


    }