import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Subject } from 'rxjs';

import { IUsersTable } from './userstable';
import { UsersTableService } from './userstable.service';

@Component({
  selector: 'app-userstable',
  templateUrl: './datatable.component.html'
})

export class DataTableComponent implements OnInit {
  errorMessage = '';
  dtOptions: DataTables.Settings = {};


  usersData: IUsersTable[] = [];
  dtTrigger: Subject<IUsersTable> = new Subject();

  constructor(public cmnSrv: CommonService,
    private usersDataService: UsersTableService) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.usersDataService.getUsersData().subscribe(
      usersData => {
        this.usersData = usersData;
        this.dtTrigger.next();
      },
      error => this.errorMessage = <any>error
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  // this.dtOptions = {
  //   data: this.data,      
  //   columns: [
  //     { title: 'Id'},
  //     { title: 'Name' },
  //     { title: 'User Type' },
  //     { title: 'Group' },
  //     { title: 'Dealer Outlet' },
  //     { title: 'Dealer Company' },
  //     {
  //       title: 'Action', render: (data: any, type: any, full: any) => {
  //         return '<button class="btn  btn-just-icon btn-round btn-light"><i class="material-icons">edit</i></button>';
  //       }
  //     }
  //   ]
  // };
  // console.log(this.dtOptions.data);

}
