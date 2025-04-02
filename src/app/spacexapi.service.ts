import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './models/mission';

@Injectable({
    providedIn: 'root'
})
export class SpacexApiService {

    private apiUrl = 'https://api.spacexdata.com/v3'; 

    constructor(private http: HttpClient) { }

    getLaunches(): Observable<Mission[]> {
        return this.http.get<Mission[]>(`${this.apiUrl}/launches`);
    }

    getLaunchDetails(flight_number: number): Observable<Mission> {
        console.log(`${flight_number}`) 
        return this.http.get<Mission>(`${this.apiUrl}/launches/${flight_number}`);
    }
}