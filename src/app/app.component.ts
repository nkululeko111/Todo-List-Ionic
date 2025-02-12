import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    IonicModule,
    TaskListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.title.trim()) {
      this.taskService.addTask(this.title, this.description);
      this.title = '';
      this.description = '';
    }
  }
}
