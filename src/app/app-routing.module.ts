import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}from './home/home.component';
import {OurteamComponent}from './ourteam/ourteam.component';
import {LogoutComponent}from './logout/logout.component';
import {ContactComponent}from './contact/contact.component';
import {LoginComponent}from './login/login.component';
import {RegisterComponent}from './register/register.component';
import {OurservicesComponent}from './ourservices/ourservices.component';
import {AboutusComponent}from './aboutus/aboutus.component';
import {CustomerportalComponent}from './customerportal/customerportal.component';
const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'ourteam',component: OurteamComponent},
  {path:'logout',component: LogoutComponent},
  {path:'contact',component: ContactComponent},
  {path:'login',component: LoginComponent},
  {path:'ourservices',component: OurservicesComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'register',component: RegisterComponent},
  {path:'customerportal',component: CustomerportalComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]