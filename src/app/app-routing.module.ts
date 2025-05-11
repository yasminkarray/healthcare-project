import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

// Importation des composants de rôle
import { GeneralDirectionComponent } from './general-direction/general-direction.component';
import { DepartmentHeadsComponent } from './department-heads/department-heads.component';
import { TechnicalManagersComponent } from './technical-managers/technical-managers.component';
import { MedicalTeamsComponent } from './medical-teams/medical-teams.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    data: { animation: 'LoginPage' }
  },
  { 
    path: 'general-direction', 
    component: GeneralDirectionComponent 
  },
  { 
    path: 'department-heads', 
    component: DepartmentHeadsComponent 
  },
  { 
    path: 'technical-managers', 
    component: TechnicalManagersComponent 
  },
  { 
    path: 'medical-teams', 
    component: MedicalTeamsComponent 
  },
  { 
    path: 'auth', 
    component: AuthComponent,
    data: { animation: 'AuthPage' }
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
