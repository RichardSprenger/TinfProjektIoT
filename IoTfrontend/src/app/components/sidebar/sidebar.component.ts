import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarOpen = false;

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
