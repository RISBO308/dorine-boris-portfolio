import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Parcours } from './parcours';

describe('Parcours', () => {
  let component: Parcours;
  let fixture: ComponentFixture<Parcours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parcours],
    }).compileComponents();

    fixture = TestBed.createComponent(Parcours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title and subtitle', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent?.trim()).toBe('Mon parcours');
    expect(compiled.querySelector('.parcours-subtitle')?.textContent?.trim()).toBe(
      "Un parcours multidisciplinaire, de l'agronomie au développement web."
    );
  });

  it('should render the six timeline entries', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const entries = Array.from(compiled.querySelectorAll('.timeline-content p')).map((item) => item.textContent?.trim());

    expect(entries).toHaveLength(6);
    expect(entries[0]).toContain('2022 — BTS Entrepreneuriat agropastoral');
    expect(entries[1]).toContain('2023 — Licence professionnelle Agronomie tropicale');
    expect(entries[2]).toContain('2025 — SNK AI Challenge');
    expect(entries[3]).toContain('2026 — Angular Talent Lab');
    expect(entries[4]).toContain('2026 — Productivité, Emploi, Business & IA');
    expect(entries[5]).toContain('2026 — Création de contenus numériques');
  });

  it('should render the CV CTA link', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cta = compiled.querySelector('a[href="/CV%20DORINE%20BORIS%20DEV%20ANGULAR.pdf"]');
    expect(cta).toBeTruthy();
    expect(cta?.textContent?.trim()).toBe('Consulter mon CV complet →');
  });
});
