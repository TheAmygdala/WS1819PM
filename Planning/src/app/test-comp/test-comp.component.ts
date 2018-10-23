import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  arr:any[];
  constructor() { }
  
  ngOnInit() {
    this.arr = ["Pokemon"];
  }
  
  onSubmit(wert)
  {
    this.arr.push(wert);
    console.log(this.arr);
  }
}
