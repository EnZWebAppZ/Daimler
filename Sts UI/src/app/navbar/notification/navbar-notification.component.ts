import { Component } from '@angular/core';
import { CommonService } from '@shared/services/common.service';
import * as Models from './models/navbar-notification.model'

@Component({
  selector: 'app-navbar-notification',
  templateUrl: './navbar-notification.component.html',
  styleUrls: ['./navbar-notification.component.scss']
})

export class NavbarNotificationComponent {
  constructor(public cmnSrv: CommonService) { }

  arr: string[] = ["solomon", "satvik", "derek", "david"];

}
