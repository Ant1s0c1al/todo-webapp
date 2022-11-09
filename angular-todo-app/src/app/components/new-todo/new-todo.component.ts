import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @Output() onNewTodo: EventEmitter<Todo> = new EventEmitter();
  // Add: Input html fields as [Properties]
  text: string;
  important: boolean = false;
  showNewTodo: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showNewTodo = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Basic [VALIDATION]
    if (!this.text) {
      alert('NO TASK IN FIELD! Please Try Again!');
      return;
    }

    // Create (Objects)
    // this is what we want to 
    // submit to our local server through our service
    const newTodo = {
      text: this.text,
      important: this.important
    }

    // (Parent) Component = todos.component.
    this.onNewTodo.emit(newTodo);

    // [RESET/Clear] Form after submit
    this.text = '';
    this.important = false;
  }

}
