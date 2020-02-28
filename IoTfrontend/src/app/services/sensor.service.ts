import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sensor } from './dataTypes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  private sensorUrl = 'api/sensor';



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getSensor(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.sensorUrl)
      .pipe(
        catchError(this.handleError<Sensor[]>('getSensor', []))
      );
  }

  getSensorById(id: number): Observable<Sensor> {
    const url = `${this.sensorUrl}/${id}`;
    return this.http.get<Sensor>(url).pipe(
      catchError(this.handleError<Sensor>(`getSensorById id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
