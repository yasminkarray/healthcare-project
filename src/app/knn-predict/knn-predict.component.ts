import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-knn-predict',
  templateUrl: './knn-predict.component.html',
  styleUrls: ['./knn-predict.component.css']
})
export class KnnPredictComponent {
feature1: number = 0;
feature2: number = 0;
feature3: number = 0;
prediction: any;

constructor(private http: HttpClient) {}

predictKNN() {
  const inputArray = [this.feature1, this.feature2, this.feature3];
  this.http.post<any>('http://localhost:5000/predict', { data: [inputArray] })
    .subscribe(response => this.prediction = response.prediction);
}

}
