import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  userList: any[];


  constructor() { 
    this.userList = [{name: "Bob", kitchen: true, bedroom: true, livingroom: true, admin: false}, 
    {name: "Jack", kitchen: false, bedroom: true, livingroom: true, admin: false}, 
    {name: "Thomas", kitchen: false, bedroom: true, livingroom: false, admin: false}];
  }

  ngOnInit() {
  }

  modifyRole(user: any){
    if(user.role != "admin"){
      user.role = "admin";
      console.log(user.name + "'s role modified to admin");
    } else {
      user.role = "user";
      console.log(user.name + "'s role modified to user");
    }

  }

  logchanges(user: any){

      console.log(user);

  }

}
