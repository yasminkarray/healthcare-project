import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface User {
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

  // ✅ Récupérer tous les utilisateurs selon leur type (collection ciblée)
  getUsersByType(type: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/${this.getCollectionName(type)}`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        return throwError(() => error);
      })
    );
  }

  // ✅ Ajouter un nouvel utilisateur dans la collection correspondante
  addUser(type: string, user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/${this.getCollectionName(type)}`, user).pipe(
      catchError((error) => {
        console.error('Erreur lors de l’ajout de l’utilisateur :', error);
        return throwError(() => error);
      })
    );
  }

  // ✅ Vérifie les identifiants (login)
  login(type: string, email: string, password: string): Observable<User[]> {
    const url = `${this.baseUrl}/${this.getCollectionName(type)}?email=${email}&password=${password}`;
    return this.http.get<User[]>(url).pipe(
      catchError((error) => {
        console.error('Erreur lors de la tentative de connexion :', error);
        return throwError(() => error);
      })
    );
  }

  // ✅ Détermine la collection selon le type d'utilisateur
  private getCollectionName(type: string): string {
    const map: Record<string, string> = {
      'general-direction': 'user_General_Direction',
      'department-heads': 'user_Department_Heads',
      'technical-managers': 'user_Technical_Managers',
      'medical-teams': 'user_Medical_Teams'
    };
    return map[type] || 'user_Medical_Teams';
  }

  // ✅ Gère l’utilisateur connecté en local (stockage)
  setCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
