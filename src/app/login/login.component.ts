import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
    type: ''
  };

  message: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  loginUser() {
    const { email, password, type } = this.user;
    console.log('Login attempt:', this.user); // Log pour vérifier les données envoyées

    if (!email || !password || !type) {
      this.message = '❗ Tous les champs sont requis.';
      return;
    }

    this.loginService.loginUser(email, password, type).subscribe({
      next: (users) => {
        console.log('Users received:', users); // Log pour voir les utilisateurs retournés
        if (users.length > 0) {
          this.message = '';
          this.redirectToDashboard(type);
        } else {
          this.message = '❌ Email, mot de passe ou type invalide.';
        }
      },
      error: (err) => {
        console.error('Erreur de connexion:', err); // Log pour voir l'erreur du serveur
        this.message = '❌ Erreur de connexion au serveur.';
      }
    });
  }

  redirectToDashboard(type: string) {
    const routes: { [key: string]: string } = {
      'General Direction': '/general-direction',
      'Department Heads': '/department-heads',
      'Technical Managers': '/technical-managers',
      'Medical Teams': '/medical-teams'
    };

    const route = routes[type];
    if (route) {
      this.router.navigate([route]);
    } else {
      this.message = '❌ Type d’utilisateur non reconnu.';
    }
  }

  goToAuth() {
    this.router.navigate(['/signup']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  openGoogle() {
    window.open('https://www.google.com', '_blank');
  }

  openFacebook() {
    window.open('https://www.facebook.com/profile.php?id=61575817990036', '_blank');
  }
}
