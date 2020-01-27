import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sensor, Sensordata } from '../Testdata/sensors';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SensordataService {

  constructor (private http: HttpClient) {}

  private sensorDataUrl = 'api/sensordata';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getSensorData (): Observable <Sensordata[]> {
    return this.http.get<Sensordata[]('')>
  }

}
