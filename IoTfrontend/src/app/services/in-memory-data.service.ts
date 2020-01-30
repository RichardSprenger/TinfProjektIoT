import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const sensor = [
      { id: 1, name: "Sensor 1", installation_date: new Date(2020-1-12)},
      { id: 2, name: "Sensor 2", installation_date: new Date(2020-1-12)},
      { id: 3, name: "Sensor 3", installation_date: new Date(2020-1-12)},
      { id: 4, name: "Sensor 4", installation_date: new Date(2020-1-12)},
      { id: 5, name: "Sensor 5", installation_date: new Date(2020-1-12)},
      { id: 6, name: "Sensor 6", installation_date: new Date(2020-1-12)},
      { id: 7, name: "Sensor 7", installation_date: new Date(2020-1-12)},
      { id: 8, name: "Sensor 8", installation_date: new Date(2020-1-12)},
      { id: 9, name: "Sensor 9", installation_date: new Date(2020-1-12)}
    ];

    const type = [
      { id: 1, name: "Temperatur", unit: "°C" },
      { id: 2, name: "Geschwindigkeit", unit: "m/s" }
    ];

    const sensordata = [
      { id: 1, id_Sensor: 1, value: 23, id_type: 1, timeCreated: new Date(2020-1-12)},
      { id: 3, id_Sensor: 2, value: 12, id_type: 2, timeCreated: new Date(2020-1-12)},
      { id: 2, id_Sensor: 3, value: 21, id_type: 1, timeCreated: new Date(2020-1-12)},
      { id: 4, id_Sensor: 4, value: 27, id_type: 2, timeCreated: new Date(2020-1-12)},
  
      { id: 5, id_Sensor: 1, value: 27, id_type: 1, timeCreated: new Date(2020-1-12)},
      { id: 6, id_Sensor: 2, value: 13, id_type: 2, timeCreated: new Date(2020-1-12)},
      { id: 7, id_Sensor: 3, value: 25, id_type: 1, timeCreated: new Date(2020-1-12)},
      { id: 8, id_Sensor: 4, value: 26, id_type: 2, timeCreated: new Date(2020-1-12)},
  
      { id: 9, id_Sensor: 1, value: 25, id_type: 1, timeCreated: new Date(2020-1-12)},
      { id: 10, id_Sensor: 2, value: 12, id_type: 2, timeCreated: new Date(2020-1-12)},
      { id: 11, id_Sensor: 3, value: 23, id_type: 1, timeCreated: new Date(2020-1-12)},
      { id: 12, id_Sensor: 4, value: 25, id_type: 2, timeCreated: new Date(2020-1-12)}
    ];    

    return {sensor, type, sensordata};
  }

  constructor() { }
}
