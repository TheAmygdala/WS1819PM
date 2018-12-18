import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Test } from './test';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  tests: AngularFirestoreCollection<Test>;

  constructor(private afs: AngularFirestore) {
    this.tests = afs.collection<Test>('test');
   }

   getTests() {
     return this.tests.valueChanges();
   }

   addTest(test: Test) {
     this.tests.add(test);
   }
}
