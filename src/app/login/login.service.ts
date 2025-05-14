import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  email: string;
  password: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000'; // URL du backend

  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string, type: string): Observable<User[]> {
    const collection = this.getCollectionName(type);
    console.log('Calling API with collection:', collection); // Log pour vérifier la collection utilisée
    return this.http.get<User[]>(`${this.baseUrl}/${collection}?email=${email}&password=${password}`);
  }

  private getCollectionName(type: string): string {
    const mapping: { [key: string]: string } = {
      'General Direction': 'user_General_Direction',
      'Department Heads': 'user_Department_Heads',
      'Technical Managers': 'user_Technical_Managers',
      'Medical Teams': 'user_Medical_Teams'
    };

    return mapping[type as keyof typeof mapping] || '';
  }
}
