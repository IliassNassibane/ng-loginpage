import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createlogin-page',
  templateUrl: './createlogin-page.component.html',
  styleUrls: ['./createlogin-page.component.css']
})

export class CreateloginPageComponent implements OnInit {
  passcreate : string = 'logincreate-password';
  passcreateconfirm : string = 'logincreate-password-confirm';
  
  IdArray : string[] = new Array();

  constructor() { 
    //this.IdArray.push('logincreate-mailadres', this.passcreate, this.passcreateconfirm, 'logincreate-filler');
  }

  ngOnInit() {
  }
}