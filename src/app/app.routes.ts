import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missionDetails/missiondetails.component';

export const routes: Routes = [
  { path: 'missions', component: MissionlistComponent },
  { path: 'missions/:flight_number', component: MissiondetailsComponent },
  { path: '', redirectTo: '/missions', pathMatch: 'full' } 
];