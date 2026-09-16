import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppContants } from '../../constants';

@Component({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
],
  selector: 'app-app-root',
  styleUrl: './app-root.scss',
  templateUrl: './app-root.html',
})
export class AppRoot {
  protected readonly appTitle = signal($localize`:@@appTitle:${ AppContants.APP_NAME }`);

}
