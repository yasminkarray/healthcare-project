import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './logup/auth.component';
import { HomeComponent } from './home/home.component';


// Composants de rôle
import { GeneralDirectionComponent } from './dashboards/general-direction/general-direction.component';
import { DepartmentHeadsComponent } from './dashboards/department-heads/department-heads.component';
import { TechnicalManagersComponent } from './dashboards/technical-managers/technical-managers.component';
import { MedicalTeamsComponent } from './dashboards/medical-teams/medical-teams.component';
import { KnnPredictComponent } from './knn-predict/knn-predict.component';
import { RegressionPredictComponent } from './regression-predict/regression-predict.component';
import { StatisticsComponent } from './dashboards/department-heads/statistics/statistics.component';
import { StatisticsComponent1 } from './dashboards/medical-teams/statistics1/statistics.component';
import { DeepComponent } from'./deep/deep.component';
import { NlpComponent } from'./nlp/nlp.component';


const routes: Routes = [
  { path: 'department-heads/statistics', component: StatisticsComponent },
  { path: 'medical-teams/statistics1', component: StatisticsComponent1 },  
  { path: 'nlp', component: NlpComponent },
  { path: 'deep', component: DeepComponent },
  { path: 'knn-predict', component: KnnPredictComponent },
  { path: 'regression-predict', component: RegressionPredictComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'general-direction', component: GeneralDirectionComponent },
  { path: 'department-heads', component: DepartmentHeadsComponent },
  { path: 'technical-managers', component: TechnicalManagersComponent },
  { path: 'medical-teams', component: MedicalTeamsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
   // 🆕 Add these two lines:

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
