import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Test } from '../test';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  test: Test = {
    test: '',
    zahl: 0
  };

  tests: Observable<any[]>;

  arr: any[];
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.arr = ['Pokemon'];
    this.tests = this.testService.getTests();
  }
  onSubmit(wert) {
    this.arr.push(wert);
    console.log(this.arr);
  }

  addTest() {
    this.testService.addTest(this.test);
  }



}
