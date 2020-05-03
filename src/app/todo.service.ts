import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IToDo } from './todo';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TodoService {
  public updateUrl="http://localhost:3050/todos"
  public deleteUrl = "http://localhost:3050/delete-todo?todoId=";
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getTodos(): Observable<IToDo[]>{
    return this.http
    .get<IToDo[]>("http://localhost:3050/todos?todouser=kavindu")
  
  }
  updateTodo (iTodo: IToDo): Observable<IToDo> {
    console.log(iTodo.todo)
    return  this.http.post<IToDo>(this.updateUrl, iTodo)
    
  }
  deleteTodoById(id : number): Observable<{}> {
    return this.http.delete(this.deleteUrl+id)
  }
  constructor(private http: HttpClient) { }
}
