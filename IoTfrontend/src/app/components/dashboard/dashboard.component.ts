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
  sensorsForDisplay: SensorDisplay[];
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
    console.log("Alle Sensoren")
    console.log(this.sensors);

    this.typeService.getType()
    .subscribe(typeProvided => {
      
      this.types = typeProvided;
      this.getSensordata();
    })
    
  }

  getSensordata() {
    console.log("\nAlle einheiten")
    console.log(this.types);

    this.sensors.forEach(element => {
      console.log("\n\n Momentanes Element")
      console.log(element);

      // to wait for the observable funtion
      let cont = false
      let calcSensorDisplay = {id: null, name: null, lastValue: null, unit: null, timeCreated: null};
      let sensordata;
      let lastValue;

      // give the calcSensorDisplay the Id of this point
      calcSensorDisplay.id = element.id;
      // give namo of this array point
      calcSensorDisplay.name = element.name;
      
      // get all Sensordata for this sensor
      this.sensordataService.getSensordata(element.id)
      .subscribe(sensordataProvided => {
        console.log("Gehe in sensordata")
        sensordata = sensordataProvided;
        
        cont = true
        console.log(sensordata);
      });

      console.log(sensordata);

      
      /*
      // wait until the data has been loaded
      while(!cont) {}
      console.log("\nAlle Sensordataen zu: " + element.id);
      console.log(sensordata);

      // check for the last value put in the data
      sensordata.array.forEach(element => {
        if (element.timeCreated > lastValue) {
          // save it als the last value
          lastValue = element;
        }
      });

      console.log("\nLetzter wert");
      console.log(lastValue);

      calcSensorDisplay.lastValue = lastValue.value;
      calcSensorDisplay.unit = this.types.find(element => element.id == lastValue.idType).unit;
      calcSensorDisplay.timeCreated = lastValue.timeCreated;

      console.log("\nGanzer Sensor Display von: " + element.id);
      console.log(calcSensorDisplay);

      this.sensorsForDisplay.push(calcSensorDisplay);

      */
    });
    this.checkContentReady();
  }

  matchSensordata() {

  }

  checkContentReady() {
    console.log(this.sensorsForDisplay);
    this.contentReady = true;
  }

}
