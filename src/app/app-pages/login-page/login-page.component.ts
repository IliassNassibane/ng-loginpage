import { Component, OnInit } from '@angular/core';
import { ElPasswordComponent } from '../../app-elements/el-password/el-password.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  password:string = 'login-password';

  constructor() { }

  ngOnInit() {
  }

}