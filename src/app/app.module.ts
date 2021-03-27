import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactComponent } from './contact/contact.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomerportalComponent } from './customerportal/customerportal.component';
//import { Component } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
   LogoutComponent,
   OurteamComponent,
   ContactComponent,
   LoginComponent,
   CustomerportalComponent,
   RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
