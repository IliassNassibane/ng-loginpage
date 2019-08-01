import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createlogin-page',
  templateUrl: './createlogin-page.component.html',
  styleUrls: ['./createlogin-page.component.css']
})

export class CreateloginPageComponent implements OnInit {
  passcreate : string = 'logincreate-password';
  passcreateconfirm : string = 'logincreate-password-confirm';
  
  IdArray : Array<string>; //['logincreate-mailadres', this.passcreate, this.passcreateconfirm, 'logincreate-filler'];

  constructor() { }

  ngOnInit() {
  }
}