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

  it('should have anchor links to #projects and #contact with exact labels', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectBtn = compiled.querySelector('a[href="#projects"]');
    const contactBtn = compiled.querySelector('a[href="#contact"]');

    expect(projectBtn).toBeTruthy();
    expect(projectBtn?.textContent?.trim()).toBe('Voir mes projets');

    expect(contactBtn).toBeTruthy();
    expect(contactBtn?.textContent?.trim()).toBe('Me contacter');
  });

  it('should render the signature SVG illustration', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const svg = compiled.querySelector('svg.hero-illustration');
    expect(svg).toBeTruthy();
  });
});
