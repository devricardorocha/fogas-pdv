import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly documentTitle = inject(Title);
  protected readonly title = signal($localize`:@@appTitle:Fogás POS`);

  constructor() {
    this.documentTitle.setTitle(this.title());
  }
}
