import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppContants } from './core';
import { IconRegistry } from './core/services/icon-registry';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly documentTitle = inject(Title);
  private iconRegistry = inject(IconRegistry);
  protected readonly title = signal($localize`:@@appTitle:${ AppContants.APP_NAME }`);

  constructor() {
    this.documentTitle.setTitle(this.title());
    this.iconRegistry.registerIcons();
  }

}
