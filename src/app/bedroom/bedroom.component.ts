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
  duration: number;
  countdown: any;
  unsavedTempChange: boolean;

  constructor() {
    this.windowOpen = false;
    this.timeToOpen = false;
    this.pcOn = false;
    this.temperature = 17;
    this.unsavedTempChange = false;
   }

  ngOnInit() {
  }

  openWindows(){
    this.old = new Date();
    let oldDateObj: number = Date.now();
    this.until = new Date(oldDateObj + this.duration*60000);
    this.windowOpen = true;
    this.timeToOpen = false;
    this.stopCount();
    console.log("windows are open!");
    setTimeout(() => {
      if(this.windowOpen == true){
        this.closeWindows();
      }
    }, this.duration * 60000)

  }

  closeWindows(){
    this.windowOpen = false;
    console.log("windows are closed!");
    this.countdown = setTimeout(() => {
      alert("It's time to open the windows!");
      this.timeToOpen = true;
    }, 5000);
  }

  stopCount() {
    clearTimeout(this.countdown); 
  }

  setTemp(){
    this.tempSet = true;
    this.tempDate = new Date();
    this.unsavedTempChange = false;
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
