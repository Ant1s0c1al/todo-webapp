import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
// (Interface)
import { Todo } from '../../Todo';
// NOTE: Without service.ts
//import { TODOS } from '../../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  //todos: Todo[] = TODOS;
  todos: Todo[] = [];

  // To Use Service | Add as Provider to constructor()
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // todos: Todo[] = [] 
    // [hardcoded] data = [TODOS]
    // this.todos = this.todoService.getTodos();

    // Get Back Todo's from Observable | (return value) => ...
    this.todoService.getTodos().subscribe((todos) => this.todos = todos);
  }

  // Define (onDeleteTodo)="deleteTodo(todo)"
  // TYPE: todo: Todo (Single Object) | Todo[Array]
  deleteTodo(todo: Todo) {
    // call a service (method) | task.service.ts • deleteTodo(todo)
    // for each (t)odo this (t)odo.id not equal to the todo deleted
    // todoService calls deleteTodo(deletes from server) | then [FILTER]: Out from UI
    this.todoService.deleteTodo(todo).subscribe(() => (this.todos = this.todos.filter(t => t.id !== todo.id)));
  }
}
