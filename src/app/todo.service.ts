import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

const firstTodoList: Todo[] = [{id:1, title:'Hello World'}, {id:2, title:'Wubba Lubba'}, {id:3, title: 'Dub Dub!'}];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Todo[] = [];

  constructor(private http:HttpClient) {
    this.todoList = firstTodoList;
  }


getToDoList(): Todo[] {
  return this.todoList;
}

addTodo(todo:Todo): void {
  this.http.post('http://localhost:3000/add-todo', todo).subscribe();
  if(todo.title!=="") {
    this.todoList.push(todo);
  } else {
    alert('Please enter something to do')
  }
}

removeTodo(todo:Todo): void {
  const i = this.todoList.indexOf(todo);
  this.todoList.splice(i, 1);
}

updateTodo(todo:Todo):void {
  const i = this.todoList.indexOf(todo);
  this.todoList[i] = { ...todo };
}
}
