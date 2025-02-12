import { Component, OnInit, inject } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    IonicModule
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  private taskService = inject(TaskService);

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  completeTask(id: number): void {
    this.taskService.completeTask(id);
    this.loadTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }
}
