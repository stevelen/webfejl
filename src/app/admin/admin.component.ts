import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  userList: any[];


  constructor() { 
    this.userList = [{name: "Bob", role: "user"}, 
    {name: "Jack", role: "user"}, 
    {name: "Thomas", role: "user"}];
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

}
