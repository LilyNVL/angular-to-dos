import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { TodoInputComponent } from './todo-input/todo-input.component';

/// J'ai préféré te rendre une version fonctionnelle donc le path ne marche pas, ou pas à grand chose ;)

const routes: Routes = [
  {path:'add-todo', component: TodoInputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
