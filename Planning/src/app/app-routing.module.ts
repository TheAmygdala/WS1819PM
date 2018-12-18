import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { TaskPoolComponent } from './task-pool/task-pool.component';
import { UserComponent } from './user/user.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { SprintComponent } from './sprint/sprint.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'task-pool', component: TaskPoolComponent},
  {path: 'user', component: UserComponent},
  {path: 'test', component: TestCompComponent  }
];
=======
  {path: "", redirectTo:"/login", pathMatch:"full" },
  {path:"login", component: LoginComponent},
  {path: "task-pool", component: TaskPoolComponent},
  {path:"user", component: UserComponent},
  {path: "test", component: TestCompComponent  },
  {path: "sprint", component: SprintComponent }
]
>>>>>>> a939c491544b33f2e87fb0d4127dca8bca3962df
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
