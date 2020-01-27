import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Sensor, SensorDisplay, Sensordata, Type } from '../../Testdata/sensors';

import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { SensorService } from 'src/app/services/sensor.service';

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
  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.getHeroes();
    

    this.checkContentReady();
  }

  getHeroes(): void {
    this.sensorService.getSensor()
    .subscribe(sensors => this.sensors = sensors);
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
