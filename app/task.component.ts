import {Component} from 'angular2/core';

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
