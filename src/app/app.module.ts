import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Pour le binding [(ngModel)]
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Pour animations Angular
import { HttpClientModule } from '@angular/common/http'; // Pour les requêtes HTTP

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AnalysesComponent } from './analyses/analyses.component';
import { GeneralDirectionComponent } from './general-direction/general-direction.component';
import { DepartmentHeadsComponent } from './department-heads/department-heads.component';
import { TechnicalManagersComponent } from './technical-managers/technical-managers.component';
import { MedicalTeamsComponent } from './medical-teams/medical-teams.component';

import { AuthService } from './auth/auth.service'; // Assure-toi que le chemin est correct

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    AnalysesComponent,
    GeneralDirectionComponent,
    DepartmentHeadsComponent,
    TechnicalManagersComponent,
    MedicalTeamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
