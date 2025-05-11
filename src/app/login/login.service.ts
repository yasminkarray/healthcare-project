import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000/users'; // JSON Server

  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string, type: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?email=${email}&password=${password}&type=${type}`);
  }
}
