import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-el-nulling',
  templateUrl: './el-nulling.component.html',
  styleUrls: ['./el-nulling.component.css']
})

export class ElNullingComponent implements OnInit {
  @Input()
  idArr : Array<string>;

  constructor() { }

  ngOnInit() {
  }

  // TODO - remove when in prod.
  /*
  private Test() {
    let strOutput : string;
    let testStrArr : string[];

    alert(testStrArr.findIndex(x => x == undefined));

    this.idArr.reverse().forEach(x => strOutput += ("\nIndex " + x.indexOf.toString() + ": " + x));

    alert(
      'array length is: ' + testStrArr.length +
      '\nArray content:\n' + strOutput);
  }
  */

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

    //let usableArr = this.idArr.splice(this.idArr.indexOf(undefined), 1);
    const usableArr : string[] = ["logincreate-mailadres", 'logincreate-password', 'logincreate-password-confirm', 'logincreate-filler'];

    usableArr.splice(-1, 1);

    alert(usableArr[-1]);

    for (let id = 0; id < usableArr.length; id++) {
      //alert('Object ' + id + ' in array is: ' + this.idArr[id]);

      outputArr.push(document.getElementById(usableArr[id]));
    }

    /*
    filteredArr.forEach(id => {
      if (!isNullOrUndefined(id)) {
        outputArr.push(document.getElementById(id.toString()));
      }
    });
    */
    
    return outputArr;
  }
}
