import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  // Add: <app-todo-item (onDeleteTodo)=" "
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  // Define (click)="onDelete(todo)"
  onDelete(todo: Todo) {
    // log current todo item
    console.log(todo);
    this.onDeleteTodo.emit(todo);
  }
}
