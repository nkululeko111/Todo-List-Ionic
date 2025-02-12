import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  constructor() { }

  addTask(title: string, description?: string): void {
    this.tasks.push({ id: this.nextId++, title, description, completed: false });
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}

