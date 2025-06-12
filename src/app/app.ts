import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // <-- Import CommonModule for *ngFor

@Component({
  selector: 'app-root',
  standalone: true,
  // Link to the new files and import the necessary modules
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  // The app title, which can now be changed by the user
  title = 'first-ng-app';

  // An array of features to display in a list
  features = [
    'Standalone Components',
    'Two-Way Data Binding',
    'Event Handling'
  ];

  // A method to add a new feature to our list
  addFeature() {
    const newFeature = prompt('What new feature would you like to add?');
    if (newFeature) {
      this.features.push(newFeature);
    }
  }
}