import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import {MatFormField} from '@angular/material/form-field';


@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent implements OnInit {

  hide = true;
  constructor() { }

  ngOnInit() {
  }

}
