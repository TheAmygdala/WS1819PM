import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPoolComponent } from './task-pool.component';

describe('TaskPoolComponent', () => {
  let component: TaskPoolComponent;
  let fixture: ComponentFixture<TaskPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
