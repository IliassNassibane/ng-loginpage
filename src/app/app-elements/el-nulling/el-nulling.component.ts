import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-el-nulling',
  templateUrl: './el-nulling.component.html',
  styleUrls: ['./el-nulling.component.css']
})

export class ElNullingComponent implements OnInit {
  @Input()
  idArr : string[] = new Array();

  constructor() { }

  ngOnInit() {
  }

  // TODO - remove when in prod.
  
  private Test() {
    let strOutput : string;

    this.idArr.forEach(x => strOutput += ("\nIndex " + x.indexOf.toString() + ": " + x));

    alert(
      'array length is: ' + this.idArr.length +
      '\nArray content:\n' + strOutput);
  }

  private EmptyInput() {
    const IdElementArr : Array<Element> = this.StringArrayToIDArray(); //.filter(function(i){ return i != undefined; });

    if(this.idArr.length <= 0) {
      IdElementArr.forEach(x => x.textContent = '');
    } else {
      alert("There is no input to empty...");
    }
  }

  private StringArrayToIDArray() : Array<Element> {
    let outputArr : Array<Element>;

    for (let id = 0; id < this.idArr.length; id++) {
      if (!isNullOrUndefined(this.idArr[id])) {
        outputArr.push(document.getElementById(this.idArr[id]));
      }
    }
    return outputArr;
  }
}
