import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    var submittedForm = form.form.value;
    console.log(form.form.value);
    if("user" == submittedForm.username && "user" == submittedForm.password){
      this.router.navigate(["/bedroom", {name: "myname"}]);
      localStorage.setItem("username", submittedForm.username);
      localStorage.setItem("password", submittedForm.password);
    }
    if("admin" == submittedForm.username && "admin" == submittedForm.password){
      this.router.navigate(["/bedroom", {name: "myname"}]);
      localStorage.setItem("username", submittedForm.username);
      localStorage.setItem("password", submittedForm.password);
    }
    if(localStorage.username == submittedForm.username && localStorage.password == submittedForm.password){
      this.router.navigate(["/bedroom", {name: "myname"}]);
      localStorage.setItem("username", submittedForm.username);
      localStorage.setItem("password", submittedForm.password);
    }
  }

}
