import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  outputs:['onSubmit']
})
export class LoginComponent implements OnInit {

  onSubmit = new EventEmitter<any>();
  email = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  login = function(){
    this.onSubmit.emit({
      email:this.email,
      password: this.password
    })
  }



}
