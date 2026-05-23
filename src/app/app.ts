import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperBar } from './upper-bar/upper-bar';
import { Footer } from './footer/footer';
import { Content } from './content/content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperBar, Footer, Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('m-fernanda');
}
