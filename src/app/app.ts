import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCounter } from './my-counter/my-counter';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MyCounter
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
