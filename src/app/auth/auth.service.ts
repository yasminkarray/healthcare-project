import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id?: number;
  FullName: string;
  email: string;
  password: string;
  type: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsersByType(type: string): Observable<User[]> {
    const collection = this.getCollectionName(type);
    return this.http.get<User[]>(`${this.baseUrl}/${collection}`);
  }

  addUser(type: string, user: User): Observable<User> {
    const collection = this.getCollectionName(type);
    return this.http.post<User>(`${this.baseUrl}/${collection}`, user);
  }

  private getCollectionName(type: string): string {
    const validCollections = [
      'user_General_Direction',
      'user_Department_Heads',
      'user_Technical_Managers',
      'user_Medical_Teams'
    ];
    if (validCollections.includes(type)) {
      return type;
    }
    return 'user_Medical_Teams'; // valeur par défaut
  }
}
