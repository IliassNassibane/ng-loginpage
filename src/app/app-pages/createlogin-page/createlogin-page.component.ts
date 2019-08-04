import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createlogin-page',
  templateUrl: './createlogin-page.component.html',
  styleUrls: ['./createlogin-page.component.css']
})

export class CreateloginPageComponent implements OnInit {
  passcreate : string = 'logincreate-password';
  passcreateconfirm : string = 'logincreate-password-confirm';

  constructor() { 
  }

  ngOnInit() {
  }

  private formReset(){
    let formToReset = <HTMLFormElement>document.getElementById('logincreate-form');
    formToReset.reset();
  }
}