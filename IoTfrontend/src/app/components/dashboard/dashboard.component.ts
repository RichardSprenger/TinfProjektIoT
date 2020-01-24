import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Sensor, SensorDisplay, Sensordata, Type } from '../../Testdata/sensors';
// import {SENSORS, SENSORDATAS, TYPES } from '../../Testdata/dataset';

import { SENSORDATAS, TYPES } from '../../Testdata/dataset';

import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

export const SENSORS: Sensor[] = [
  { id: 1, name: "Sensor 1", installation_date: new Date(2020-1-12)},
  { id: 2, name: "Sensor 2", installation_date: new Date(2020-1-12)},
  { id: 3, name: "Sensor 3", installation_date: new Date(2020-1-12)},
  { id: 4, name: "Sensor 4", installation_date: new Date(2020-1-12)},
  { id: 5, name: "Sensor 5", installation_date: new Date(2020-1-12)},
  { id: 6, name: "Sensor 6", installation_date: new Date(2020-1-12)},
  { id: 7, name: "Sensor 7", installation_date: new Date(2020-1-12)},
  { id: 8, name: "Sensor 8", installation_date: new Date(2020-1-12)},
  { id: 9, name: "Sensor 9", installation_date: new Date(2020-1-12)},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardComponent implements OnInit {

  showAdminView: Boolean = false;
  showSidebar: Boolean = false;
  contentReady = false;
  gridClass = "grid";

  sesnors: Sensor[];

  constructor() { }

  ngOnInit() {
    this.getSensors();
    // call after Data has been loaded
    this.getValues();
  }

  getSensors() {

  }


  getValues() {
    // let hereSensor = this.sensors;


    /*
    for (let i = 0; i < this.sensorLength; i++) {
      console.log(i);
      console.log(this.sensors[i]);
      this.getSensorDisplayed.id = this.sensors[i].id;
      this.getSensorDisplayed.name = this.sensors[i].name;

      let lastDate;
      let lastvalue;
      let id_type
      const sensorId = this.sensors[i].id;
      
      this.sensordatas.forEach(data => {
        if (data.id_Sensor = sensorId) {
          if (lastDate == null) {
            lastDate = data.timeCreated;
            lastvalue = data.value;
            id_type = data.id_type
          } else {
            if (data.timeCreated < lastDate) {
              lastDate = data.timeCreated;
              lastvalue = data.value;
              id_type = id_type
            }
          }
        }
      });
      
      this.getSensorDisplayed.lastvalue = lastvalue;
      this.getSensorDisplayed.id_type = id_type;
      this.getSensorDisplayed.timeCreated = lastDate;


      console.log(this.getSensorDisplayed);
      this.sensorDisplayed.push(this.getSensorDisplayed);
      /*
      if (i == 0) {
        this.sensorDisplayed[0] = this.sensorDisplayed[1];
        this.sensorDisplayed.pop()
      }
      
      console.log(this.sensorDisplayed[i-1]);
      console.log(this.sensorDisplayed); 
      console.log("ende");
    };
    
    */
    this.checkContentReady();
    
  }


  checkContentReady() {
    this.contentReady = true;
  }

  openSidebar() {
    this.showSidebar = !this.showSidebar;
    if (this.showSidebar) {
      this.gridClass = "gridBlured";
    } else {
      this.gridClass = "grid";
    }
  
  }

  openAdminView() {
    this.showAdminView = !this.showAdminView;

    if (this.showAdminView) {
      this.gridClass = "gridBlured";
    } else {
      this.gridClass = "grid";
    }

  }

}
