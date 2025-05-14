import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-regression-predict',
  templateUrl: './regression-predict.component.html',
  styleUrls: ['./regression-predict.component.css']
})
export class RegressionPredictComponent {
regFeature1: number = 0;
regFeature2: number = 0;
regFeature3: number = 0;
prediction: any;

constructor(private http: HttpClient) {}

predictRegression() {
  const inputArray = [this.regFeature1, this.regFeature2, this.regFeature3];
  this.http.post<any>('http://localhost:5001/predict', { data: [inputArray] })
    .subscribe(response => {
      this.prediction = response.prediction[0]; // ou `.join(', ')` si plusieurs résultats
    });
}

}
