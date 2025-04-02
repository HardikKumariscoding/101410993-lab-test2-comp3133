import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../spacexapi.service';
import { Mission } from '../models/mission';
import { ActivatedRoute, Router } from '@angular/router'; 
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-missiondetails',
    templateUrl: './missiondetails.component.html',
    styleUrl: './missiondetails.component.css',
    imports: [NgIf]
})
export class MissiondetailsComponent implements OnInit {
    mission: Mission | undefined;

    constructor(
        private spacexApi: SpacexApiService,
        private route: ActivatedRoute, 
        private router: Router
    ) { }

    ngOnInit(): void {
        const flightNumber = Number(this.route.snapshot.paramMap.get('flight_number'));

        if (flightNumber) {
            this.spacexApi.getLaunchDetails(flightNumber).subscribe(data => {
                this.mission = data;
            });
        }
    }
    goBack(): void {
        this.router.navigate(['/missions']);  
    }
}