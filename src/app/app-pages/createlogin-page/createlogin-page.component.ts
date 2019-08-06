import { Component, OnInit } from '@angular/core';
import { CreateLoginFormService } from 'src/app/services/create-login-form.service';

@Component({
  selector: 'app-createlogin-page',
  templateUrl: './createlogin-page.component.html',
  styleUrls: [
    './createlogin-page.component.css',
    '../../app-styles/loginorcreate-button.css'
  ],
  providers: [CreateLoginFormService]
})

export class CreateloginPageComponent implements OnInit {
  passcreate : string = 'logincreate-password';
  passcreateconfirm : string = 'logincreate-password-confirm';

  constructor(
    private createLoginFormService: CreateLoginFormService
  ) { }

  ngOnInit(): void { 
  }

  private formReset(){
    let formToReset = <HTMLFormElement>document.getElementById('logincreate-form');
    formToReset.reset();
  }
}