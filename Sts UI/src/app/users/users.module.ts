import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from './users.component';
import { DataTableComponent } from './usersdatatable/datatable.component';
import { UsersSidePanelComponent } from './userssidepanel/sidepanel.component';
import { UserDetailComponent } from './edituserdetails/userdetails.component';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    NgSelectModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent,DataTableComponent,UsersSidePanelComponent, UserDetailComponent]
})
export class UsersModule { }
