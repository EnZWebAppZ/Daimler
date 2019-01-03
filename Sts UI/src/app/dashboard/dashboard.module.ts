import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarNotificationComponent } from '../navbar/notification/navbar-notification.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    NavbarComponent,
    NavbarNotificationComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    DashboardHomeComponent,
    TasksComponent,
    StatsComponent   
  ]
})
export class DashboardModule { }
