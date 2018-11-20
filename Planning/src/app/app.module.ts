import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskPoolComponent } from './task-pool/task-pool.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonTasksComponent } from './common-tasks/common-tasks.component';
import { UserComponent } from './user/user.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { DAO} from './dao.service';
import {Memory} from './/memory.service';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SprintComponent } from './sprint/sprint.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskPoolComponent,
    LoginComponent,
    CommonTasksComponent,
    UserComponent,
    TestCompComponent,
    SprintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [DAO, Memory],
  bootstrap: [AppComponent]
})
export class AppModule { }
