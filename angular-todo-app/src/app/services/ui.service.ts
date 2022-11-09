import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showNewTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // When Create a Task Button Clicked!
  // call toggleNewTask
  toggleNewTask(): void {
    this.showNewTask = !this.showNewTask;
    this.subject.next(this.showNewTask);
  }

  // subscribe to onToggle
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
// NOTE: Bring ui service into header.component.ts
