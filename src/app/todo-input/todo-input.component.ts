import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  ngOninit(): void {}

  title='';

  submitTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
