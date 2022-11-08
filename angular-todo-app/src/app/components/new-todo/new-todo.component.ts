import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  // Add: Input html fields as [Properties]
  text: string;
  important: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
