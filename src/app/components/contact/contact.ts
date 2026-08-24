import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit(): void {
    if (this.name().trim() && this.email().trim() && this.message().trim()) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.name.set('');
    this.email.set('');
    this.message.set('');
    this.submitted.set(false);
  }
}
