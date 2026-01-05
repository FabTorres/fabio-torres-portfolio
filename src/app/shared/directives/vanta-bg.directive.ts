import { Directive, ElementRef, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Directive({
  selector: '[appVantaBg]',
  standalone: true
})
export class VantaBgDirective implements OnInit, OnDestroy {
  private vantaEffect: any;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {

        import('vanta/dist/vanta.net.min').then((vantaLib) => {

          const vanta = vantaLib.default || vantaLib;

          this.vantaEffect = vanta({
            el: this.el.nativeElement,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,

            color: 0x16DB65,
            backgroundColor: 0x020202,

            points: 6.00,
            maxDistance: 22.00,
            spacing: 20.00,

            showDots: true,
            THREE: THREE
          });
        }).catch(err => console.error('Error cargando Vanta:', err));
      });
    }
  }

  ngOnDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}