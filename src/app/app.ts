import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from "./components/data-binding/data-binding";
import { Signal } from "./components/signal/signal";

@Component({
  selector: 'app-root',
  imports: [ Signal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_21_hindi');
}
