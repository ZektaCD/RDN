import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

type SendEmailResponse = {
  success: boolean;
  message: string;
};

@Injectable({
  providedIn: 'root',
})
export class SendEmail {
  private readonly contactEndpoint =
    `${environment.baseUrl.replace(/\/?$/, '/')}apiRDN/email/index.php/contacto`;

  async sendContactEmail(formData: FormData): Promise<SendEmailResponse> {
    const response = await fetch(this.contactEndpoint, {
      method: 'POST',
      body: formData,
    });

    const rawPayload = await response.text();
    const payload = this.parseResponse(rawPayload);

    if (!response.ok) {
      throw new Error(payload.message || 'No se pudo enviar el mensaje.');
    }

    return payload;
  }

  private parseResponse(rawPayload: string): SendEmailResponse {
    if (!rawPayload) {
      return { success: false, message: 'Respuesta vacia del servidor' };
    }

    try {
      return JSON.parse(rawPayload) as SendEmailResponse;
    } catch {
      return { success: false, message: rawPayload };
    }
  }
}
