// src/app/general-direction/general-direction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface GeneralDirectionUser {
  id: number;
  FullName: string;
  email: string;
  password: string;
  type: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class GeneralDirectionService {
  private jsonUrl = 'assets/bd.json';

  constructor(private http: HttpClient) {}

  getGeneralDirectionUsers(): Observable<GeneralDirectionUser[]> {
    return this.http.get<{ user_General_Direction: GeneralDirectionUser[] }>(this.jsonUrl).pipe(
      map((data) => data.user_General_Direction) // Extraire les utilisateurs du JSON
    );
  }
}
