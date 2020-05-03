import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public submitstatus="";
  profileForm = new FormGroup({
    todoId:new FormControl(''),
    user: new FormControl(''),
    todo: new FormControl(''),
  });
  constructor(private _todoservice: TodoService) { }

  ngOnInit() {
  }
  updateTodo() {
    console.log(this.profileForm.value);
    this._todoservice.updateTodo(this.profileForm.value).subscribe({
      next: data => {
        console.log(data.todo)
        this.submitstatus="add todo success"
        this.ngOnInit()
      },
      error: error => {
        console.error('There was an error!', error)
        this.submitstatus="fail"
      }
  })
  
  }

}
