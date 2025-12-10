import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { ReactiveForm } from './components/reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular19Project');
}
