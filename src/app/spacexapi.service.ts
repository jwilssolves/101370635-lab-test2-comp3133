import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from './models/mission'; 

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getAllLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  getLaunchesByYear(year: string): Observable<Mission[]> {
    const url = `${this.baseUrl}?launch_year=${year}`;
    return this.http.get<Mission[]>(url);
  }
  getLaunchByFlightNumber(flightNumber: string): Observable<Mission> {
    const url = `${this.baseUrl}/${flightNumber}`;
    return this.http.get<Mission>(url);
  }
  
}
