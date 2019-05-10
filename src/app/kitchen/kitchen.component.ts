import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  selectedProgram: string;
  selectedTimer: number;
  started: boolean;
  old: Date;
  until: Date;
  temperature: number;
  rangehoodOn: boolean;
  userError: boolean;
  fridgetemp: number;
  freeztemp: number;
  tempSet: boolean


  constructor() { 
    this.rangehoodOn = false;
    this.fridgetemp = 6;
    this.freeztemp = -17;
  }

  ngOnInit() {
  }

  startProgram(){
    if(this.selectedProgram === undefined || this.selectedTimer === undefined || this.temperature === undefined){
      this.userError = true;
    } else {
      this.userError = false;
    }
    if(this.userError == false){
    this.started = true;
    this.old = new Date();
    this.until = new Date(new Date().getTime() + (this.selectedTimer*60000));
    console.log("program started")
    setTimeout(() => {
      if(this.started == true){
        this.stopProgram();
      }
    }, this.selectedTimer * 60000)
  } else {
    console.log("user error");
  }

    
  }

  stopProgram(){
      this.started = false;
      console.log("program finished or stopped");
  }

  turnOnRangehood(){
    if(this.rangehoodOn==true){
      this.rangehoodOn = false;
      console.log("Rangehood is off!")
    } else {
      this.rangehoodOn = true;
      console.log("Rangehood is on!")
    }
  }

  setFridgeTemps(){
    this.tempSet = true;
    console.log("Fridge temp set to: " + this.fridgetemp +"\nFreezer temp set to: " + this.freeztemp);
  }

  

}
