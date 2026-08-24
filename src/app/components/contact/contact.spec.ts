import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have id="contact" on root section for anchor navigation', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#contact')).toBeTruthy();
  });

  it('should render the exact heading <h2>Contact</h2>', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent?.trim()).toBe('Contact');
  });

  it('should render contact links for email and GitHub', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const emailLink = compiled.querySelector('a[href^="mailto:"]');
    const githubLink = compiled.querySelector('a[href="https://github.com/RISBO308"]');

    expect(emailLink).toBeTruthy();
    expect(githubLink).toBeTruthy();
  });

  it('should handle form submission with signals', () => {
    component.name.set('Test User');
    component.email.set('test@example.com');
    component.message.set('Hello Boris!');

    component.onSubmit();
    expect(component.submitted()).toBe(true);

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.form-success-message')).toBeTruthy();

    component.reset();
    expect(component.submitted()).toBe(false);
    expect(component.name()).toBe('');
  });
});
