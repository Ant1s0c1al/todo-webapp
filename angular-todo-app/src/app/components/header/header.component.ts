import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Header Component';

  constructor() { }

  ngOnInit(): void {
  }

  toggleNewTodo() {
    console.log('Toggle • Add a Task');
  }

}
