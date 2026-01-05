import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  stats = [
    {
      value: '4',
      label: 'PROYECTOS TOTALES',
      desc: 'Soluciones web y móviles creadas',
      iconClass: 'bi bi-code-slash'
    },
    {
      value: '1',
      label: 'CERTIFICADOS',
      desc: 'Competencias profesionales validadas',
      iconClass: 'bi bi-award'
    },
    {
      value: '+2.5',
      label: 'AÑOS DE EXPERIENCIA',
      desc: 'Trayectoria de aprendizaje continuo',
      iconClass: 'bi bi-briefcase'
    }
  ];

  constructor(private scrollService: ScrollService) { }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/assets/docs/FabioTorres-CV.pdf';
    link.download = 'FabioTorres-CV.pdf';
    link.target = '_blank';
    link.click();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToPortfolio() {
    this.scrollService.scrollToSection('portfolio');
  }
}