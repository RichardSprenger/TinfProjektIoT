import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Sensor, SensorDisplay, Sensordata, Type } from '../../services/dataTypes';

import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { SensorService } from 'src/app/services/sensor.service';
import { SensordataService } from 'src/app/services/sensordata.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardComponent implements OnInit {

  showAdminView: Boolean = false;
  showSidebar: Boolean = false;
  contentReady = false;

  sensors: Sensor[];
  sensorsForDisplay: SensorDisplay[] = [{id: null, name: null, lastValue: null, unit: null, timeCreated: null}];
  sensorData: Sensordata[] = [];
  types: Type[];
  continue = true;

  constructor(
    private sensorService: SensorService,
    private sensordataService: SensordataService,
    private typeService: TypeService,
  
  ) { }

  ngOnInit() {
    this.getSensors();

  }

  getSensors(): void {
    this.sensorService.getSensor()
    .subscribe(sensorsProvided => {
      this.sensors = sensorsProvided;
      this.getUnits();
    });
  }

  getUnits(): void {
    this.typeService.getType()
    .subscribe(typeProvided => {
      
      this.types = typeProvided;
      this.getSensordata();
    })
    
  }

  getSensordata() {
    this.sensors.forEach(element => {

      // to wait for the observable funtion
      let calcSensorDisplay = {id: null, name: null, lastValue: null, unit: null, timeCreated: null};
      let sensordata;


      // give the calcSensorDisplay the Id of this point
      calcSensorDisplay.id = element.id;
      // give namo of this array point
      calcSensorDisplay.name = element.name;
      
      // get all Sensordata for this sensor
      this.sensordataService.getSensordata(element.id)
      .subscribe(sensordataProvided => {
        sensordata = sensordataProvided;
        this.getSensordataDispalyWithSensordata(calcSensorDisplay, sensordata);
      });

    });
  }

  getSensordataDispalyWithSensordata(calcSensorDisplay, sensorData) {
    calcSensorDisplay.lastValue = sensorData.value;
    calcSensorDisplay.unit = this.types.find(element => element.id == sensorData.idType).unit;
    calcSensorDisplay.timeCreated = sensorData.timeCreated;

    if (this.sensorsForDisplay[0].id == null) {
      this.sensorsForDisplay[0] = calcSensorDisplay;
    } else {
      this.sensorsForDisplay.push(calcSensorDisplay);
    }
    

    this.checkContentReady();
  }

  checkContentReady() {

    if (this.sensorsForDisplay.length == this.sensors.length) {
      console.log(this.sensorsForDisplay);
      this.contentReady = true;
    }
  }

}
