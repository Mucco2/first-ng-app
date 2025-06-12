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
  title = 'Muccos Todo App';
  // This property will be bound to the input field
  newTaskName: string = '';

  // An array of Task objects
  tasks: Task[] = [
    { name: 'Learn Angular basics', completed: false },
    { name: 'Build a simple app', completed: false },
    { name: 'Add more features and styles', completed: false },
    { name: 'Take a break!', completed: false },
    { name: 'Review code and refactor', completed: false },
    
  ];

  // A "getter" that calculates the number of remaining tasks on the fly
  get remainingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  // Method to add a new task from the input field
  addTask() {
    // Prevent adding empty tasks
    if (this.newTaskName.trim() === '') {
      return;
    }
    this.tasks.push({ name: this.newTaskName, completed: false });
    // Clear the input field after adding
    this.newTaskName = '';
  }

  // Method to delete a task
  deleteTask(taskToDelete: Task) {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
  }
}