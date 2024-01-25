import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeDeleteComponent } from './components/home-delete/home-delete.component';
import { HomeListOneComponent } from './components/home-list-one/home-list-one.component';
import { HomeCreateComponent } from './components/home-create/home-create.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "delete/:listNome", component: HomeDeleteComponent
  },
  {
    path: "find/:listNome", component: HomeListOneComponent
  },
  {
    path: "create", component: HomeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
