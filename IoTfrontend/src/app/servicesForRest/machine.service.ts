import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Machine } from '../services/dataTypes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private machineAPI = 'http://localhost:8080/api/machine';
  
  getMachineInfo(): Observable<Machine> {
    return this.http.get<Machine>(this.machineAPI);
  }

  constructor(private http: HttpClient) {
   }
}
