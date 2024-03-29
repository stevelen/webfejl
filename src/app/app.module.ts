import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import { KitchenComponent } from './kitchen/kitchen.component'; 
import {MatSelectModule} from '@angular/material/select';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 



@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    SignupComponent,
    SigninComponent,
    BedroomComponent,
    KitchenComponent,
    LivingroomComponent,
    AdminComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
