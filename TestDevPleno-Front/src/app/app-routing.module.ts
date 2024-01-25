import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeDeleteComponent } from './components/home-delete/home-delete.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "lists/:listNome", component: HomeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
