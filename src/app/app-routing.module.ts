import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthorizationService } from './authorization.service';
import { BedroomComponent } from './bedroom/bedroom.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { AdminComponent } from './admin/admin.component';
import { RolecheckService } from './rolecheck.service';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'bedroom', component: BedroomComponent, canActivate: [AuthorizationService]},
  {path: 'kitchen', component: KitchenComponent, canActivate: [AuthorizationService]},
  {path: 'livingroom', component: LivingroomComponent, canActivate: [AuthorizationService]},
  {path: 'admin', component: AdminComponent, canActivate: [RolecheckService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
