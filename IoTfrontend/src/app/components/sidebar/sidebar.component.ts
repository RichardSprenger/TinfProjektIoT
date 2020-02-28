import { Component, OnInit } from '@angular/core';
import { SensorDisplay, Machine} from '../../services/dataTypes';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarOpen = false;

  nextBreakdown = new Date('2020-2-18');

  machineInfo: Machine;

  sensor: SensorDisplay[] = [
    {id: 1, name: 'Sensor 1', lastValue: 20, unit: '°C', timeCreated: new Date('2020-1-1')},
    {id: 2, name: 'Sensor 2', lastValue: 197, unit: 'km/h', timeCreated: new Date('2020-3-1')},
    {id: 3, name: 'Sensor 3', lastValue: 87, unit: 'Bar', timeCreated: new Date('2020-1-5')},
    {id: 4, name: 'Sensor 4', lastValue: 93, unit: '°', timeCreated: new Date('2020-1-16')},
    {id: 5, name: 'Sensor 5', lastValue: 200, unit: 'km/h', timeCreated: new Date('2020-1-20')}
  ];

  toggleBar() {
    if (this.sidebarOpen) {
      this.sidebarOpen = false;
    } else {
      this.sidebarOpen = true;
    }
  }

  getMachineData() {
    this.machineService.getMachineInfo()
      .subscribe(data => this.machineInfo = data);
  }

  constructor( private machineService: MachineService) { }

  ngOnInit() {
    this.getMachineData();
  }

}
