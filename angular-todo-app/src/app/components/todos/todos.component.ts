import { Component, OnInit } from '@angular/core';
// (Interface)
import { Todo } from '../../Todo';
import { TODOS } from '../../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = TODOS;

  constructor() { }

  ngOnInit(): void {
  }

}
