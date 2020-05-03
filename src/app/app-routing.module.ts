import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';


const routes: Routes = [
  { path: 'list-todo', component: TodoComponent },
  { path: 'add-todo', component: TodoAddComponent },
  { path: '',   redirectTo: '/list-todo', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
