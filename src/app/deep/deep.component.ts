import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PredictionResponse {
  prediction: number;
  class_name: string;
  confidence: number;
  is_normal: boolean;
  status: string;
}

@Component({
  selector: 'app-deep',
  templateUrl: './deep.component.html',
  styleUrls: ['./deep.component.css']
})
export class DeepComponent {
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  prediction: PredictionResponse | null = null;
  loading = false;
  error: string | null = null;
  private apiUrl = 'http://127.0.0.1:5002/api/predict';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (!this.selectedFile) return;

    this.loading = true;
    this.error = null;
    this.prediction = null;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post<PredictionResponse>(this.apiUrl, formData).subscribe({
      next: (response) => {
        this.prediction = response;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
        console.error('Erreur lors de la prédiction:', error);
      }
    });
  }
}
