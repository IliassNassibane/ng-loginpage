import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-el-password',
  templateUrl: './el-password.component.html',
  styleUrls: ['./el-password.component.css']
})

export class ElPasswordComponent implements OnInit {
  @Input()
  childId: string;

  constructor() { 
  }

  ngOnInit() {
  }

  // TODO - remove when in prod.
  /*
  private test() {
    alert(
      'Dit is this.childId: ' + this.childId.toString() 
    );
  }
  */

  private showPass() {
    document.getElementById(this.childId).setAttribute("type", "text");
  }

  private hidePass() {
    document.getElementById(this.childId).setAttribute("type", "password");
  }
}