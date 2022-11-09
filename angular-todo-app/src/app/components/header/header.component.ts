import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Header Component';
  showNewTodo: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  toggleNewTodo() {
    console.log('Toggle • Add a Task');
    this.uiService.toggleNewTask();
  }

}
