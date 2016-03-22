// import { Component } from 'angular2/core';
import { Component, EventEmitter } from 'angular2/core';

@Component({
   selector: 'task-display',
   inputs: ['task'],
  template: `
  <h3>{{ task.description}}</h3>
  `
})

export class TaskComponent {
  public task: Task;
}

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent],
  template: `
  <task-display *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)" [class.selected]='currentTask === selectedTask' [task]='currentTask'>
  </task-display>
  `
})
export class TaskListComponent{
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void{
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
}

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
    <h1>To-Do List</h1>
    <task-list [taskList]="tasks" (onTaskSelect)="taskWasSelected($event)"></task-list>
    </div>
  `
})

export class AppComponent{
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do LIst App", 0),
      new Task("Learn Typescript", 1),
      new Task("Miss PHP", 2),
      new Task("Stay Focused", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask);
  }
}
//model class
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){

  }

}
