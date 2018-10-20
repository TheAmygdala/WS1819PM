import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import { TaskPoolComponent } from './task-pool/task-pool.component';

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full" },
  {path:"login", component: LoginComponent},
  {path: "task-pool", component: TaskPoolComponent}
]
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
