import { Component, OnInit } from '@angular/core';
import { TVIEW } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css']
})
export class LivingroomComponent implements OnInit {

  lightsOn: boolean;
  tvOn: boolean;
  channel: number;
  volume: number;
  muted: boolean;
  doorsOpen: boolean;

  constructor() {
      this.lightsOn = false;
      this.tvOn = false;
      this.channel = 5;
      this.volume = 10;
      this.muted = false;
      this.doorsOpen = true;
   }

  ngOnInit() {
  }

  switchLights(){
    if(this.lightsOn == true){
      this.lightsOn = false;
      console.log("Lights are off");
    } else {
      this.lightsOn = true;
      console.log("Lights are on");
    }
  }

  turnOnTv(){
    if(this.tvOn==true){
      this.tvOn = false;
      console.log("TV is off!")
    } else {
      this.tvOn = true;
      console.log("TV is on!")
    }
  }

  channelDown(){
    if(this.tvOn == false){
      this.tvOn = true;
    }
    if(this.channel == 1){
      this.channel = 123;
    } else {
      this.channel--;
    }
    console.log("channel down");
  }

  channelUp(){
    if(this.tvOn == false){
      this.tvOn = true;
    }
    if(this.channel == 123){
      this.channel = 1;
    } else {
      this.channel++;
    }
    console.log("channel up");

  }

  volumeDown(){
    if(this.muted == true){
      this.muted = false;
      console.log("TV unmuted!")
    }
    if(this.volume == 0){
      return;
    } else {
      this.volume--;
    }
    console.log("volume down");
  }

  volumeUp(){
    if(this.muted == true){
      this.muted = false;
      console.log("TV unmuted!")
    }
    if(this.volume == 100){
      return;
    } else {
      this.volume++;
    }
    console.log("volume up");
  }

  mute(){
    if(this.muted==true){
      this.muted = false;
      console.log("TV unmuted!")
    } else {
      this.muted = true;
      console.log("TV muted!")
    }

  }

  lockDoors(){
    if(this.doorsOpen==true){
      this.doorsOpen = false;
      console.log("Doors locked!")
    } else {
      this.doorsOpen = true;
      console.log("Doors unlocked!")
    }
  }

}
