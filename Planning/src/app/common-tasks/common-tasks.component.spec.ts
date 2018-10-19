import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTasksComponent } from './common-tasks.component';

describe('CommonTasksComponent', () => {
  let component: CommonTasksComponent;
  let fixture: ComponentFixture<CommonTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
