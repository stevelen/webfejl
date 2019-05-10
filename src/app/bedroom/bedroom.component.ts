import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {
  
  windowOpen: boolean;
  tempSet: boolean;
  until: Date;
  old: Date;
  tempDate: Date;
  timeToOpen: boolean;
  pcOn: boolean;
  temperature: number;

  constructor() {
    this.windowOpen = false;
    this.timeToOpen = false;
    this.pcOn = false;
    this.temperature = 17;
   }

  ngOnInit() {
  }

  openWindows(){
    this.old = new Date();
    let oldDateObj: number = Date.now();
    this.until = new Date(oldDateObj + 15*60000);
    this.windowOpen = true;
    this.timeToOpen = false;
    console.log("windows are open!");
    setTimeout(() => {
      if(this.windowOpen == true){
        this.closeWindows();
      }
    }, 15 * 60000)

  }

  closeWindows(){
    this.windowOpen = false;
    console.log("windows are closed!");
    setTimeout(() => {
      alert("It's time to open the windows!");
      this.timeToOpen = true;
    }, 5000);
  }

  setTemp(){
    this.tempSet = true;
    this.tempDate = new Date();
    console.log("Temp set to: " + this.temperature);
  }

  turnOnPc(){
    if(this.pcOn==true){
      this.pcOn = false;
      console.log("PC is off!")
    } else {
      this.pcOn = true;
      console.log("PC is on!")
    }
  }
  
}
