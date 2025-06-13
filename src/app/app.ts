import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Define a structure for what a Task object looks like
export interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  title = 'Mirsads Todo App';
  newTaskName: string = '';
  tasks: Task[] = [
    { name: 'Learn Angular basics', completed: false },
    { name: 'Build a simple app', completed: false },
    { name: 'Add more features and styles', completed: false },
    { name: 'Take a break!', completed: false },
    { name: 'Review code and refactor', completed: false },
    { name: 'finish infotavle', completed: false },

  ];

  private storageKey = 'my-todo-app-tasks';

  constructor() {
    this.loadTasks();
  }

  get remainingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  private saveTasks() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  private loadTasks() {
    const tasksFromStorage = localStorage.getItem(this.storageKey);
    if (tasksFromStorage) {
      this.tasks = JSON.parse(tasksFromStorage);
    }
  }

  addTask() {
    if (this.newTaskName.trim() === '') {
      return;
    }
    this.tasks.push({ name: this.newTaskName, completed: false });
    this.newTaskName = '';
    this.saveTasks();
  }

  deleteTask(taskToDelete: Task) {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
    this.saveTasks();
  }

  toggleTaskCompletion() {
    this.saveTasks();
  }
}








