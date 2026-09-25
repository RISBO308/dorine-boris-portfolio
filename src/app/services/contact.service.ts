import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_nudtzkr';
const PUBLIC_KEY = 'swCL5eEz4HsxJDlup';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  async send(data: ContactFormData): Promise<void> {
    await emailjs.send(
      SERVICE_ID,
      'template_7atmf7u',
      {
        from_name: data.name,
        from_email: data.email,
        reply_to: data.email,
        message: data.message,
      },
      PUBLIC_KEY,
    );

    await emailjs.send(
      SERVICE_ID,
      'template_1dbejea',
      {
        to_email: data.email,
        to_name: data.name,
      },
      PUBLIC_KEY,
    );
  }
}
