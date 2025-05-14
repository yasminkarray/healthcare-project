import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NlpService {
  private apiUrl = 'http://localhost:5003/api/analyze-feedback';

  constructor(private http: HttpClient) {}

  analyzeFeedback(feedbackText: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { feedback_text: feedbackText });
  }
}
