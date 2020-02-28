import { Component, OnInit } from '@angular/core';
import { Sensor, Sensordata } from 'src/app/services/dataTypes';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SensorService } from 'src/app/services/sensor.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SensordataService } from 'src/app/services/sensordata.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {

  sensor: Sensor;
  sensorData: Sensordata[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sensorService: SensorService,
    private sensordataService: SensordataService

  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.getSensor(Number(id))
  }

  getSensor(id: number) {
    this.sensorService.getSensorById(id)
    .subscribe(element => {
      this.sensor = element;
      console.log(this.sensor);
      this.getSensorData(element.id);
    })
  }

  getSensorData(id: number) {
    this.sensordataService.getSensordata(id)
      .subscribe(elements => {
        console.log("Test")
        this.sensorData = elements;
        console.log(this.sensorData);
      });
  }

}
