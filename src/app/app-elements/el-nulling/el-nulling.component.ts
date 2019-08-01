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
    var strOutput : string;

    this.idArr.forEach(x => strOutput += ("\n" + x));

    alert(
      'array length is: ' + this.idArr.length +
      '\nArray content:' + strOutput);
  }
  */

  private EmptyInput() {
    var IdElementArr : Array<Element>;
    IdElementArr = this.StringArrayToIDArray(); //.filter(function(i){ return i != undefined; });

    if(this.idArr.length <= 0) {
      IdElementArr.forEach(x => x.textContent = '');
    } else {
      alert("There is no input to empty...");
    }
  }

  private StringArrayToIDArray() : Array<Element> {
    var outputArr : Array<Element>;
    
    for (let id = 0; id < this.idArr.length; id++) {
      alert('Object ' + id + ' in array is: ' + this.idArr[id])

      outputArr.push(document.getElementById(id.toString()));
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
