import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Machine } from '../Testdata/sensors';
import { HttpClient, HttpHeader } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private machineAPI = 'api/machine'

  getMachineInfo(): Observable<Machine> {
    return this.http.get<Machine>(this.machineAPI);
  }

  constructor() {
    private http: HttpClient,
   }
}