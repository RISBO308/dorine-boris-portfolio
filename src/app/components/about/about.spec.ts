import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have id="about" on the root section for anchor navigation', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutSection = compiled.querySelector('section#about');
    expect(aboutSection).toBeTruthy();
  });

  it('should render the exact <h2> heading', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h2');
    expect(heading?.textContent?.trim()).toBe('À propos');
  });

  it('should render the exact bio paragraph without alteration', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraph = compiled.querySelector('p');
    const expectedText =
      "Ingénieur agronome des travaux reconverti au développement web, je conçois des solutions numériques répondant à des problématiques concrètes. Formé au développement Angular au sein de la cohorte ATL2026, je travaille avec TypeScript, HTML et CSS, et je développe progressivement mes compétences en intégration de solutions IA. Curieux et orienté résultats, j'aime transformer une idée en application fonctionnelle à travers des projets concrets — et je suis aujourd'hui disponible pour des missions freelance.";

    expect(paragraph?.textContent?.trim()).toBe(expectedText);
  });
});
