import { Component, OnDestroy, OnInit, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-start-screen',
  styleUrl: './start-screen.scss',
  templateUrl: './start-screen.html',
})
export class StartScreen implements OnInit, OnDestroy {
  protected readonly showStartButton = signal(false);

  private transitionTimer?: ReturnType<typeof setTimeout>;
  private router = inject(Router);

  ngOnInit(): void {
    this.transitionTimer = setTimeout(() => this.showStartButton.set(true), 1_000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.transitionTimer);
  }

  goToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

}
