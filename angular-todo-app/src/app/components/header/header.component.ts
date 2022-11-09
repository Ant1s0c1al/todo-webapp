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
  // Add a Task btn-primary • [DEFAULT]
  showNewTodo: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showNewTodo = value));
  }

  ngOnInit(): void {
  }

  toggleNewTodo() {
    console.log('Toggle • Add a Task');
    this.uiService.toggleNewTask();
  }

}
