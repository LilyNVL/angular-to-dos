import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodoComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
