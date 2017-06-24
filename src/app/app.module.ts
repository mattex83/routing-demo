import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from "app/app-routing/app-routing.module";
import { AuthModule } from "app/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
