import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  goToAuth(): void {
    this.router.navigate(['/auth']);
  }

  onSearch(): void {
    const trimmedQuery = this.searchQuery.trim();
    if (trimmedQuery) {
      console.log('Recherche lancée pour :', trimmedQuery);
      // Rediriger vers la page de résultats avec le terme de recherche en paramètre
      // Exemple : this.router.navigate(['/search'], { queryParams: { q: trimmedQuery } });
    } else {
      alert('Veuillez saisir un terme de recherche.');
    }
  }

  openGoogle(): void {
    window.open('https://www.google.com', '_blank');
  }

  openFacebook(): void {
    window.open('https://www.facebook.com/profile.php?id=61575817990036', '_blank');
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/ton-lien-linkedin', '_blank'); // Remplace avec ton vrai lien
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
}
