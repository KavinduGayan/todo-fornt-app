import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  public appName="Todo application";
  public greeting="Welcome to you todo list";
  public deleteBtnName="Delete Todo"
  public deleteStatus="";
  public todos=[];
  public show=false;
  

  deleteTodo(id) {
    
    this._todoservice.deleteTodoById(id)
    .subscribe({
      next: data => {
        console.log(data);
        
      },
      error : error => {
        console.log(error);
        
      }
    })
    this.ngOnInit()
  }


  addToDo() {
    this.show=true;
  }
  
  constructor(private _todoservice: TodoService) { }

  ngOnInit() {
    this._todoservice.getTodos()
    .subscribe(d => this.todos = d );
  }

}
