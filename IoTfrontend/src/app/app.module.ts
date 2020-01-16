import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailviewComponent } from './components/detailview/detailview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminviewComponent } from './components/adminview/adminview.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailviewComponent,
    SidebarComponent,
    AdminviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
