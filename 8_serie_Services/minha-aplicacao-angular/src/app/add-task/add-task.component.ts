// add-task.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  template: `
    <div>
      <label for="newTask">Nova Tarefa:</label>
      <input type="text" id="newTask" [(ngModel)]="newTask">
      <button (click)="addTask()">Adicionar Tarefa</button>
    </div>
  `,
})
export class AddTaskComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }
}

