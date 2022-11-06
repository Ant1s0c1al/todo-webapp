import { Injectable } from '@angular/core';
import { Todo } from '../Todo';
import { TODOS } from '../mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  // (Method)
  getTodos(): Todo[] {
    return TODOS;
  }
}
