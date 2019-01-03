import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Subject } from 'rxjs';

import { IUserDetail } from './userdetails';
import { UserDetailsService } from './userdetail.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html'
})

export class UserDetailComponent implements OnInit {
  errorMessage = '';
  userDetails: IUserDetail;
  userTypeItems = ["GSU", "MSU","Admin", "Manager", "Consultant"];
  groupItems = ["Group 1", "Group 2"];
  dealerOutletItems = ["Outlet 1","Outlet 2"];
  dealerCompanyItems = ["Company 1","Company 2"];

  constructor(public cmnSrv: CommonService,
    private userDetailsService: UserDetailsService) {

  }

  ngOnInit(): void {
    this.userDetailsService.getUserDetails("123").subscribe(
      userDetails => {
        this.userDetails = userDetails;
      },
      error => this.errorMessage = <any>error
    );
   
  }

}
