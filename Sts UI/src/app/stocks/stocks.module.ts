import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksComponent } from './stocks.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: StocksComponent }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StocksComponent]
})
export class StocksModule { }
