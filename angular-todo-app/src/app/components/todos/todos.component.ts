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
    this.todos = this.todoService.getTodos();
  }

}
