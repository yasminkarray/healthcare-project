import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

interface User {
  id?: number;
  FullName: string;
  email: string;
  password: string;
  type: string;
  image?: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user: User = { FullName: '', email: '', password: '', type: '' };
  previewUrl: string | ArrayBuffer | null = null;
  imageError: string = '';
  imageFile: File | null = null;
  formError: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // ✅ Lorsque l'utilisateur sélectionne une image
  onFileSelected(event: any): void {
    this.imageError = '';
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const allowedTypes = ['image/png', 'image/jpeg'];
      if (!allowedTypes.includes(file.type)) {
        this.imageError = 'Seuls les formats PNG et JPEG sont acceptés.';
        this.imageFile = null;
        this.previewUrl = null;
        return;
      }

      const maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        this.imageError = 'La taille de l\'image ne doit pas dépasser 2MB.';
        this.imageFile = null;
        this.previewUrl = null;
        return;
      }

      this.imageFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 6;
  }

  // ✅ L'utilisateur clique sur "Enregistrer"
  enregistre(): void {
    this.formError = '';
    this.successMessage = '';

    if (!this.user.FullName.trim()) {
      this.formError = 'Le nom complet est requis.';
      return;
    }

    if (!this.user.email.trim() || !this.validateEmail(this.user.email)) {
      this.formError = 'Veuillez entrer une adresse email valide.';
      return;
    }

    if (!this.validatePassword(this.user.password)) {
      this.formError = 'Le mot de passe doit contenir au moins 6 caractères.';
      return;
    }

    if (!this.user.type) {
      this.formError = 'Veuillez sélectionner un type d\'utilisateur.';
      return;
    }

    if (this.imageError) {
      this.formError = this.imageError;
      return;
    }

    if (!this.imageFile) {
      this.formError = 'Veuillez télécharger une image valide.';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const imageBase64 = reader.result as string;
      this.saveUser(imageBase64);
    };
    reader.readAsDataURL(this.imageFile);
  }

  // ✅ Sauvegarde dans la bonne collection
  saveUser(imageBase64: string): void {
    const newUser: User = {
      id: Date.now(),
      FullName: this.user.FullName,
      email: this.user.email,
      password: this.user.password,
      type: this.user.type,
      image: imageBase64
    };

    this.authService.getUsersByType(this.user.type).subscribe({
      next: (users) => {
        const alreadyExists = users.some(u => u.email === newUser.email);
        if (alreadyExists) {
          this.formError = 'Cet email est déjà utilisé.';
          return;
        }

        this.authService.addUser(this.user.type, newUser).subscribe({
          next: () => {
            this.successMessage = 'Inscription réussie ! Redirection...';
            this.formError = '';
            this.resetForm();
            setTimeout(() => this.router.navigate(['/login']), 2000);
          },
          error: () => {
            this.formError = 'Erreur lors de l\'enregistrement. Veuillez réessayer.';
          }
        });
      },
      error: () => {
        this.formError = 'Erreur lors de la récupération des utilisateurs.';
      }
    });
  }

  resetForm(): void {
    this.user = { FullName: '', email: '', password: '', type: '' };
    this.imageFile = null;
    this.previewUrl = null;
    this.imageError = '';
  }
  goToLogin() {
    this.router.navigate(['/login']);
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
