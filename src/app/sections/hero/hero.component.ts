import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TypingDirective } from '../../shared/directives/typing.directive';
import { VantaBgDirective } from '../../shared/directives/vanta-bg.directive';
import AOS from 'aos';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    TypingDirective,
    ButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  typingTexts = [
    'Backend Engineer con Java & Spring Boot',
    'Apps Híbridas con Ionic & Angular',
    'Migración de Sistemas Legacy a Microservicios',
    'Especialista en Soluciones Web con PHP & MySQL',
    'Arquitectura Limpia y Código Escalable'
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public scrollService: ScrollService
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 50,
        easing: 'ease-out-cubic'
      });
    }
  }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}