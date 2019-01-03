import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { TaskPoolComponent } from './task-pool/task-pool.component';
import { UserComponent } from './user/user.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { SprintComponent } from './sprint/sprint.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path: 'task-pool', component: TaskPoolComponent, canActivate: [AuthGuard] },
  {path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  {path: 'test', component: TestCompComponent, canActivate: [AuthGuard] },
  {path: 'sprint', component: SprintComponent, canActivate: [AuthGuard] }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
