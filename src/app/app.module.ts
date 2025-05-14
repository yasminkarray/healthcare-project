import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './logup/auth.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GeneralDirectionComponent } from './dashboards/general-direction/general-direction.component';
import { DepartmentHeadsComponent } from './dashboards/department-heads/department-heads.component';
import { TechnicalManagersComponent } from './dashboards/technical-managers/technical-managers.component';
import { MedicalTeamsComponent } from './dashboards/medical-teams/medical-teams.component';

import { AuthService } from './logup/auth.service';
import { KnnPredictComponent } from './knn-predict/knn-predict.component';
import { RegressionPredictComponent } from './regression-predict/regression-predict.component';
import { StatisticsComponent } from './dashboards/department-heads/statistics/statistics.component';
import { StatisticsComponent1 } from './dashboards/medical-teams/statistics1/statistics.component';
import { NlpComponent } from './nlp/nlp.component';
import { DeepComponent } from'./deep/deep.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    GeneralDirectionComponent,
    DepartmentHeadsComponent,
    TechnicalManagersComponent,
    MedicalTeamsComponent,
    KnnPredictComponent,
    RegressionPredictComponent,
    StatisticsComponent,
    StatisticsComponent1,
    NlpComponent,
    DeepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
