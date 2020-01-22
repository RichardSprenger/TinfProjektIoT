import { Component, OnInit } from '@angular/core';
import {Sensor, SensorDisplay, Sensordata, Type } from '../../Testdata/sensors';
import {SENSORS, SENSORDATAS, TYPES } from '../../Testdata/dataset';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showAdminView: Boolean = false;
  showSidebar: Boolean = false;

  gridClass = "grid";

  sensors = SENSORS;
  sensorDisplayed: SensorDisplay[];
  sensordatas = SENSORDATAS;
  types = TYPES;

  constructor() { }

  ngOnInit() {

    // call after Data has been loaded
    this.getValues();
  }

  getValues() {
    let i = 0;
    this.sensors.forEach(element => {
      this.sensorDisplayed[i].id = element.id;
      this.sensorDisplayed[i].name = element.name;
      let lastDate;
      let lastvalue;
      let id_type
      this.sensordatas.forEach(data => {
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
      });
      this.sensorDisplayed[i].lastvalue = lastvalue;
      this.sensorDisplayed[i].id_type = id_type;
      this.sensorDisplayed[i].timeCreated = lastDate;
      i++;
    });
  }

  openSidebar() {
    console.log("Sidebar");
    this.showSidebar = !this.showSidebar;
    console.log(this.showSidebar);
    if (this.showSidebar) {
      this.gridClass = "gridBlured";
    } else {
      this.gridClass = "grid";
    }

    let d = new Date(123939483);
    console.log(d);
    
  }

  openAdminView() {
    console.log("AdminView");
    this.showAdminView = !this.showAdminView;
    console.log(this.showAdminView);

    if (this.showAdminView) {
      this.gridClass = "gridBlured";
    } else {
      this.gridClass = "grid";
    }

  }

}
