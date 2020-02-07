import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Sensor, SensorDisplay, Sensordata, Type } from '../../Testdata/sensors';

import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { SensorService } from 'src/app/services/sensor.service';
import { SensordataService } from 'src/app/services/sensordata.service';

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

  sensors: Sensor[];
  sensordata: Sensordata[];


  constructor(
    private sensorService: SensorService,
    private sensordataService: SensordataService
  ) { }

  ngOnInit() {
    this.getHeroes();
    
    this.getSensorDisplay();

    this.checkContentReady();
  }

  getHeroes(): void {
    this.sensorService.getSensor()
    .subscribe(sensors => this.sensors = sensors);
  }

  getSensorDisplay() {

    this.sensors.forEach(element => {
      let getSensor;
      
      getSensor.id = element.id;
      this.sensordata = this.getSensordata(Number(element.id))
    })
  }

  getSensordata(id: number) {
    let sensorData;
    this.sensordataService.getSensorData(id)
      .subscribe(sensordata => sensorData = sensordata)
    return sensorData;
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
