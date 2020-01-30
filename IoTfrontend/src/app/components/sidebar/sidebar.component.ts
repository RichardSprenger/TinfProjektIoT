import { Component, OnInit } from '@angular/core';
import {SensorDisplay, Machine} from '../../Testdata/sensors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarOpen = false;

  lastService = new Date('2020-1-1');
  nextBreakdown = new Date('2020-2-18');
  hRuningTime = 1004;

  sensor: SensorDisplay[] = [
    {id: 1, name: 'Sensor 1', lastvalue: 20, unit: '°C', timeCreated: new Date('2020-1-1')},
    {id: 2, name: 'Sensor 2', lastvalue: 197, unit: 'km/s', timeCreated: new Date('2020-3-1')},
    {id: 3, name: 'Sensor 3', lastvalue: 87, unit: 'Bar', timeCreated: new Date('2020-1-5')}
  ];

  toggleBar() {
    if (this.sidebarOpen) {
      this.sidebarOpen = false;
    } else {
      this.sidebarOpen = true;
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
