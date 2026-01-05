import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private serviceID = 'service_cq7q903';
  private templateID = 'template_domuuys';
  private publicKey = '02zHTDuxvOLCKBtIm';

  async sendEmail(formData: any): Promise<boolean> {
    try {
      const response = await emailjs.send(
        this.serviceID, 
        this.templateID, 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Fabio Torres'
        }, 
        this.publicKey
      );

      return response.status === 200;
    } catch (error) {
      console.error('Error al enviar email:', error);
      return false;
    }
  }
}