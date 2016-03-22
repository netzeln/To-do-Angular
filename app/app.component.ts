import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>To-Do List</h1>
    </div>
    <h3 *ngFor="#task of tasks">{{task.description}}</h3>
    </div>
  `
})

export class AppComponent{
  public task: Task[];
  constructor(){
    this.task = [
      new Task("Create To-Do LIst App", 0),
      new Task("Learn Typescript", 1),
      new Task("Miss PHP", 2),
      new Task("Stay Focused", 3)
    ];
  }
}
//model class
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){

  }

}
