import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the exact candidate name and title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-name')?.textContent?.trim()).toBe('Dorine Racpesin Boris Valentin');
    expect(compiled.querySelector('.hero-title')?.textContent?.trim()).toBe('Développeur Angular');
  });

  it('should render the exact impact sentence', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-impact')?.textContent?.trim()).toBe(
      "Développeur Angular au service de l'Agritech et de l'IA."
    );
  });

  it('should have anchor links to #contact and CV download with exact labels', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const contactBtn = compiled.querySelector('a[href="#contact"]');
    const cvBtn = compiled.querySelector('a[href="/CV DORINE BORIS DEV ANGULAR.pdf"]');

    expect(contactBtn).toBeTruthy();
    expect(contactBtn?.textContent?.trim()).toBe('Me contacter');

    expect(cvBtn).toBeTruthy();
    expect(cvBtn?.textContent?.trim()).toContain('Télécharger mon CV');
  });

  it('should render the profile image illustration', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img.hero-photo');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('profile-pic.png');
  });
});
