import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports:[LoginComponent],
  declarations: [LoginComponent]
})
export class AuthModule { }
