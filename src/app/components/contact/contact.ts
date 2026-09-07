import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  readonly name = signal('');
  readonly email = signal('');
  readonly message = signal('');
  readonly submitted = signal(false);
  readonly sending = signal(false);
  readonly error = signal('');
  readonly website = signal('');
  private readonly contactService = inject(ContactService);

  onSubmit(): void {
    if (!this.name().trim() || !this.email().trim() || !this.message().trim() || this.sending()) {
      return;
    }

    this.error.set('');
    this.sending.set(true);
    this.contactService.send({
      name: this.name().trim(),
      email: this.email().trim(),
      message: this.message().trim(),
      website: this.website(),
    }).subscribe({
      next: () => {
        this.submitted.set(true);
        this.sending.set(false);
      },
      error: () => {
        this.error.set('Une erreur est survenue. Veuillez réessayer plus tard.');
        this.sending.set(false);
      },
    });
  }

  reset(): void {
    this.name.set('');
    this.email.set('');
    this.message.set('');
    this.website.set('');
    this.error.set('');
    this.sending.set(false);
    this.submitted.set(false);
  }
}
