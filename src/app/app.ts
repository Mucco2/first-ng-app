import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to muccos {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'first-ng-app';
}
