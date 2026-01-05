import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Certificate, Project, TechItem } from '../../core/models/models.model';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  
  activeTab: 'projects' | 'certificates' | 'stack' = 'projects';
  selectedCertificate: Certificate | null = null;
  safePdfUrl: SafeResourceUrl | null = null;

  projects: Project[] = [];

  certificates: Certificate[] = [
    { 
      id: 1, 
      title: 'Full Stack Development', 
      issuer: 'Argentina Programa', 
      date: '2023',
      fileName: 'argentina_programa_2023.pdf' 
    },
    { 
      id: 2, 
      title: 'Certificado Inglés A2', 
      issuer: 'I.F.D.N N7 Clodomira', 
      date: '2024',
      fileName: 'CERTIFICADO_TORRES_INGLES_A2.pdf' 
    },
    { 
      id: 3, 
      title: 'Certificado Inglés A2', 
      issuer: 'CUI-UBA', 
      date: '2022',
      fileName: 'certificado_ingles_torres_A2_UBA.pdf' 
    }
  ];

  techStack: TechItem[] = [
    { name: 'Java', iconClass: 'devicon-java-plain' },
    { name: 'Spring', iconClass: 'devicon-spring-plain' },
    { name: 'Hibernate', iconClass: 'devicon-hibernate-plain' },
    { name: 'PHP', iconClass: 'devicon-php-plain' },
    { name: 'Angular', iconClass: 'devicon-angularjs-plain' },
    { name: 'Ionic', iconClass: 'devicon-ionic-original' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain' },
    { name: 'Docker', iconClass: 'devicon-docker-plain' },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  setActiveTab(tab: 'projects' | 'certificates' | 'stack') {
    this.activeTab = tab;
  }

  openCertificate(cert: Certificate) {
    this.selectedCertificate = cert;
    const path = `assets/docs/${cert.fileName}`;
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(path);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedCertificate = null;
    document.body.style.overflow = 'auto';
  }
}