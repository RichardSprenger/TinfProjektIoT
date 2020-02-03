import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: SidebarComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule 
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
