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

  it('should render the requested name, role, and specialties', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-name')?.textContent?.trim()).toBe('Dorine Racpesin Boris Valentin');
    expect(compiled.querySelector('.hero-title')?.textContent?.trim()).toBe('Développeur Web');
    expect(compiled.querySelector('.hero-specialties')?.textContent?.trim()).toBe('Angular · TypeScript · IA');
  });

  it('should render the exact impact sentence', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-impact')?.textContent?.trim()).toBe(
      'Je transforme des idées et des besoins concrets en solutions numériques fonctionnelles.'
    );
  });

  it('should link to the projects section and CV with the requested labels', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectsBtn = compiled.querySelector('a[href="#projets"]');
    const cvBtn = compiled.querySelector('a[href="/CV%20DORINE%20BORIS%20DEV%20ANGULAR.pdf"]');

    expect(projectsBtn).toBeTruthy();
    expect(projectsBtn?.textContent?.trim()).toBe('Découvrir mes projets');
    expect(cvBtn).toBeTruthy();
    expect(cvBtn?.textContent?.trim()).toBe('Voir mon CV');
  });

  it('should render the key technologies as image badges', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const techBadges = Array.from(compiled.querySelectorAll('.hero-technologies .tech-badge'));
    const technologies = techBadges.map((badge) => badge.getAttribute('data-tech'));

    expect(techBadges.length).toBe(5);
    expect(technologies).toEqual(['Angular', 'TypeScript', 'HTML', 'CSS', 'IA']);
    expect(compiled.querySelectorAll('.hero-technologies img').length).toBe(5);
    expect(compiled.querySelector('.hero-technologies [data-tech="IA"] img')?.getAttribute('src')).toBe('ia-icon.png');
  });

  it('should render the profile image illustration and no emoji characters', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img.hero-photo');
    const heroText = compiled.textContent ?? '';

    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('profile-pic.webp');
    expect(/\p{Extended_Pictographic}/u.test(heroText)).toBe(false);
  });
});
