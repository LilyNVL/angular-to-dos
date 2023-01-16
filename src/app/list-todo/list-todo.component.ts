import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent {
  todoList: Todo[] =[];

  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {
    this.todoList = this.TodoService.getToDoList();
  }

  addTodo(title:string): void {
    this.TodoService.addTodo({"id":this.todoList.length+1, title});
  }

  removeTodo(todo:Todo):void {
    this.TodoService.removeTodo(todo);
  }

  updateTodo(todo:Todo): void {
    this.TodoService.updateTodo(todo);
  }

}
