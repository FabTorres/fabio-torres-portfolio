import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from "./sections/about/about.component";
import { VantaBgDirective } from './shared/directives/vanta-bg.directive';
import { PortfolioComponent } from "./sections/portfolio/portfolio.component";
import { ContactComponent } from "./sections/contact/contact.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    VantaBgDirective,
    PortfolioComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabio-torres-portfolio';
}