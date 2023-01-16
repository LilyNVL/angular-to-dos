import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

const firstTodoList: Todo[] = [{id:1, title:'Hello World'}];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Todo[] = [];

  constructor() {}


getToDoList(): Todo[] {
  return this.todoList;
}

addTodo(todo:Todo): void {
  this.todoList.push(todo);
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
