import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-el-password',
  templateUrl: './el-password.component.html',
  styleUrls: ['./el-password.component.css']
})

export class ElPasswordComponent implements OnInit {
  
  @Input()
  childId: string;

  constructor() { }

  ngOnInit() {
  }

  private test() {
    let _1docActiveElement = document.activeElement.id;
    let _2ParentElement = document.activeElement.parentElement.id;
    let _3ParentNode = document.activeElement.parentNode;

    alert(
      '1. document.activeElement.id: ' + _1docActiveElement.toString() + 
      '\n2. document.activeElement.parentElement.id: ' + _2ParentElement.toString() + 
      '\n3. document.activeElement.parentNode: ' + _3ParentNode.toString() +
      '\n4. Dit is this.childId: ' + this.childId.toString()
    );
  }
}