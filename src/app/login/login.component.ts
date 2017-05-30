import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username:String;
  private password:String;

  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.username, this.password);
  }

}
