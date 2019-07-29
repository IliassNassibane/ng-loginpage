import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createlogin-page',
  templateUrl: './createlogin-page.component.html',
  styleUrls: ['./createlogin-page.component.css']
})

export class CreateloginPageComponent implements OnInit {
  passcreate:string = 'logincreate-password';
  passcreateconfrm:string = 'logincreate-password-confirm';

  constructor() { }

  ngOnInit() {
  }

}