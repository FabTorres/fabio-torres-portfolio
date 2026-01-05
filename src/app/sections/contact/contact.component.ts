import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSent = false;
  isError = false;
  isLoading = false;
  socialLinks = [
    {
      name: "Conectemos!",
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fabioezequieltorres',
      iconClass: 'devicon-linkedin-plain',
      color: '#0077b5'
    },
    {
      name: 'Github',
      platform: '@FabioTorres',
      url: 'https://github.com/FabTorres',
      iconClass: 'devicon-github-original',
      color: '#fff'
    }
  ];

  constructor(private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async send() {
    if (this.contactForm.invalid || this.isLoading) return;

    this.isLoading = true;
    this.isError = false;
    this.isSent = false;

    const success = await this.emailService.sendEmail(this.contactForm.value);

    this.isLoading = false;

    if (success) {
      this.isSent = true;
      this.contactForm.reset();

      setTimeout(() => {
        this.isSent = false;
      }, 5000);
    } else {
      this.isError = true;
    }
  }
}