import { Component, OnDestroy, OnInit, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    MatButtonModule
  ],
  selector: 'app-start-page',
  styleUrl: './start-page.scss',
  templateUrl: './start-page.html',
})
export class StartPage implements OnInit, OnDestroy {
  protected readonly showStartButton = signal(false);
  protected readonly isLeaving = signal(false);

  private transitionTimer?: ReturnType<typeof setTimeout>;
  private navigationTimer?: ReturnType<typeof setTimeout>;
  private router = inject(Router);

  ngOnInit(): void {
    this.transitionTimer = setTimeout(() => this.showStartButton.set(true), 1_000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.transitionTimer);
    clearTimeout(this.navigationTimer);
  }

  goToCatalog(): void {
    if (this.isLeaving()) {
      return;
    }

    this.isLeaving.set(true);
    this.navigationTimer = setTimeout(() => this.router.navigate(['/app']), 300);
  }

}
