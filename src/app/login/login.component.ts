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

  message: string = ''; // ✅ Pour afficher le message succès/erreur

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  loginUser() {
    const { email, password, type } = this.user;

    if (!email || !password || !type) {
      this.message = 'Veuillez remplir tous les champs.';
      return;
    }
    else
    {
      this.loginService.loginUser(email, password, type).subscribe(users => {
        if (users.length > 0) {
          // ✅ Connexion réussie
          this.message = '✔ Connexion réussie !';
          switch (type) {
            case 'General Direction':
              this.router.navigate(['/general-direction']);
              break;
            case 'Department Heads':
              this.router.navigate(['/department-heads']);
              break;
            case 'Technical Managers':
              this.router.navigate(['/technical-managers']);
              break;
            case 'Medical Teams':
              this.router.navigate(['/medical-teams']);
              break;
          }
        } else {
          // ❌ Mauvais identifiants
          this.message = '❌ Email, mot de passe ou type incorrect.';
        }
        }, error => {
            this.message = 'Erreur de connexion au serveur.';
        });
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
    window.open('https://www.facebook.com', '_blank');
  }
}
