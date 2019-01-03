import { Component } from '@angular/core';
import { CommonService } from '@shared/services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  constructor( public cmnSrv: CommonService) { }

}
