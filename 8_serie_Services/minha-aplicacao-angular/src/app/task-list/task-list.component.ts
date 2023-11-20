// task-list.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>Lista de Tarefas</h2>
    <ul>
      <li *ngFor="let task of tasks">
        {{ task }}
        <button (click)="completeTask(task)">&check; Concluir</button>
      </li>
    </ul>
  `,
})
export class TaskListComponent {
  tasks: string[];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  completeTask(task: string): void {
    const index = this.tasks.indexOf(task);
    this.taskService.completeTask(index);
  }
}

