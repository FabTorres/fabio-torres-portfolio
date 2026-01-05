import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTyping]',
  standalone: true
})
export class TypingDirective implements OnInit, OnDestroy {
  @Input() texts: string[] = [];
  @Input() typeSpeed = 100;
  @Input() deleteSpeed = 50;
  @Input() waitTime = 2000;

  private textElement: HTMLElement;
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.textElement = el.nativeElement;
  }

  ngOnInit(): void {
    if (this.texts.length > 0) {
      this.type();
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private type(): void {
    const currentText = this.texts[this.currentTextIndex];
    
    // Determinar qué parte del texto mostrar
    if (this.isDeleting) {
      this.textElement.textContent = currentText.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.textElement.textContent = currentText.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    // Velocidad dinámica
    let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    // Lógica de estado
    if (!this.isDeleting && this.currentCharIndex === currentText.length) {
      // Terminó de escribir la palabra
      typeSpeed = this.waitTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      // Terminó de borrar
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
    }

    this.timeoutId = setTimeout(() => this.type(), typeSpeed);
  }
}