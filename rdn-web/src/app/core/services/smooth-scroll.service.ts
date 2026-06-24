import { DestroyRef, Injectable, NgZone, afterNextRender, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, Scroll } from '@angular/router';
import Lenis from 'lenis';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  private lenis?: Lenis;
  private animationFrameId?: number;

  constructor() {
    afterNextRender(() => this.initialize());
  }

  private initialize(): void {
    this.lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
    });

    this.zone.runOutsideAngular(() => {
      const animate = (time: number) => {
        this.lenis?.raf(time);
        this.animationFrameId = requestAnimationFrame(animate);
      };

      this.animationFrameId = requestAnimationFrame(animate);
    });

    this.router.events
      .pipe(
        filter((event): event is Scroll => event instanceof Scroll),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        if (event.anchor) {
          this.scrollToAnchor(event.anchor);
        } else if (event.position) {
          this.lenis?.scrollTo(event.position[1], { immediate: true });
        } else {
          this.lenis?.scrollTo(0, { immediate: true });
        }
      });

    this.destroyRef.onDestroy(() => {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }

      this.lenis?.destroy();
    });
  }

  private scrollToAnchor(anchor: string): void {
    requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(anchor));

      if (target) {
        this.lenis?.scrollTo(target, { offset: -96, duration: 1.1 });
      }
    });
  }
}
