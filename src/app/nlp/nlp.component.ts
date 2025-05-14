import { Component } from '@angular/core';
import { NlpService } from './nlp.service';

@Component({
  selector: 'app-nlp',
  templateUrl: './nlp.component.html',
  styleUrls: ['./nlp.component.css']  // optionnel
})
export class NlpComponent {
  feedbackText: string = '';
  result: any;

  constructor(private nlpService: NlpService) {}

  onSubmit() {
    if (!this.feedbackText.trim()) {
      console.warn('Le texte de feedback est vide.');
      return;
    }
    this.nlpService.analyzeFeedback(this.feedbackText).subscribe(
      data => {
        this.result = data.result;
        console.log('Analyse réussie', data);
      },
      error => {
        console.error('Erreur lors de l\'analyse', error);
      }
    );
  }
}
