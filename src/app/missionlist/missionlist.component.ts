import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../spacexapi.service';
import { Mission } from '../models/mission';
import { MissionfilterComponent } from "../missionfilter/missionfilter.component";
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-missionlist',
    templateUrl: './missionlist.component.html',
    styleUrl: './missionlist.component.css',
    standalone: true,
    imports: [MissionfilterComponent,RouterModule,NgFor]
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  launchYearFilter: string = '';

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit(): void {
      this.spacexApi.getLaunches().subscribe(data => {
          this.missions = data;
          this.filteredMissions = [...data];
          console.log('Initial missions:', this.missions);
      });
  }

  filterMissionsByYear(year: string): void {
      this.launchYearFilter = year;
      console.log('Filtering by year:', year); 
      console.log('Missions before filter:', this.missions); 
      if (!year) {
          this.filteredMissions = [...this.missions];
      } else {
        
          this.filteredMissions = this.missions.filter(mission => mission.launch_year == year);
      }
      console.log('Missions after filter:', this.filteredMissions); 
  }
}


