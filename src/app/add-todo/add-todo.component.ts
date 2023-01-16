import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Input() todo!: Todo;
  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit():void {};

  title='';

  removeTodo():void {
    this.remove.emit(this.todo);
  }

  completeTodo():void {
    this.update.emit({todo: this.todo})
  }

}
