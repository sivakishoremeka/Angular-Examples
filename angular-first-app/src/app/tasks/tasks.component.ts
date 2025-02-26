import { Component, Input } from '@angular/core';

import { TaskService } from './tasks.service';


@Component({
    selector: 'app-tasks',
    standalone: false,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  
  constructor (private tasksService : TaskService){};

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask() {
    this.isAddingTask = true;
  }
}
