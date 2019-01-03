import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';

import {IUsersSidePanel} from './userssidepanel';
import {UsersSidePanelService} from './sidepanel.service';

@Component({
  selector: 'app-userssidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class UsersSidePanelComponent implements OnInit{

  errorMessage = '';
  usersSidebarItems: any;
  temp :IUsersSidePanel;
  userTypes = []; selectedUserTypes = [];
  locations = []; selectedLocations = [];
  groups = []; selectedGroups = [];
  dealerOutlets = []; selectedDealerOutlets = [];
  dealerCompanies = []; selectedDealerCompanies = [];
  selectedSideBarItems = [];
  constructor(public cmnSrv: CommonService,
     private usersSidePanelService: UsersSidePanelService) { 

    }


  ngOnInit(): void {
    this.usersSidePanelService.getUsersSidePanelItems().subscribe(
      usersSidebarItems => {
        this.usersSidebarItems = usersSidebarItems;
        this.temp = this.usersSidebarItems;
        this.userTypes = this.temp.userTypes;
        this.selectedUserTypes = [this.temp.userTypes[0].code,this.temp.userTypes[1].code];
        this.locations = this.temp.locations;
        this.selectedLocations = [this.temp.locations[0].code];
        this.groups = this.temp.groups;
        this.selectedGroups = [this.temp.groups[0].code];
        this.dealerOutlets = this.temp.dealerOutlets;
        this.selectedDealerOutlets = [this.temp.dealerOutlets[0].code];
        this.dealerCompanies = this.temp.dealerCompanies;
        this.selectedDealerCompanies = [this.temp.dealerCompanies[0].code];
      },
      error => this.errorMessage = <any>error
    );
   
  }
 
  /* sidebarItems = [
    {link: '/', label: 'Dashboard', icon: 'dashboard'},
    {label: 'Components', icon: 'apps', subItem: [
      {link: '/components/buttons', label: 'buttons', icon: 'b'},
      {link: '/components/grids', label: 'grid System', icon: 'gs'},
      {link: '/components/panels', label: 'panels', icon: 'p'},
      // {link:'/components/alerts',label:'alerts',icon:'a'},
      // {link:'/components/notifications',label:'notifications',icon:'n'},
      {link: '/components/icons', label: 'icons', icon: 'i'},
      {link: '/components/typography', label: 'typography', icon: 't'},
    ]},
    {label: 'Forms', icon: 'ballot', subItem: [
      {link: '/forms/basic', label: 'basic form', icon: 'bf'},
      {link: '/forms/advance', label: 'advanced form', icon: 'af'},
      {link: '/forms/custom', label: 'custom form', icon: 'cf'},
      // {link:'/forms/validations',label:'Form Validation',icon:'fv'}
    ]},
    {label: 'Pages', icon: 'pages', subItem: [
      {link: '/pages/notfound', label: 'Not Found', icon: 'nf'},
      {link: '/pages/auth', label: 'Auth', icon: 'A'}
    ]},
    { label: 'Tables', icon: 'grid_on', subItem: [
      {link: '/tables/basic', label: 'Basic Table', icon: 'BT'},
      {link: '/tables/smart', label: 'smart table', icon: 'ST'}
    ]},
    {link: '/charts', label: 'Charts', icon: 'show_chart'},
    {link: '/maps', label: 'Maps', icon: 'place'},
    {link: '/editors', label: 'Editors', icon: 'edit'},
    {link: '/calendar', label: 'Calendar', icon: 'date_range'},
    {label: 'Menu', icon: 'menu', subItem: [
      {link: 'void()', label: 'Sub Menu L1', icon: 'l1'},
      { label: 'Sub Menu L1', icon: 'l1' , subItem: [
        {link: 'void()', label: 'Sub Menu L2', icon: 'l2'},
        {link: 'void()', label: 'Sub Menu L2', icon: 'l2'},
      ]},
    ]}
  ]; */

}
