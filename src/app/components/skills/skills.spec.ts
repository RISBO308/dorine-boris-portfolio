import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have id="skills" on the root section for anchor navigation', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#skills')).toBeTruthy();
  });

  it('should render the exact <h2> heading', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent?.trim()).toBe('Compétences');
  });

  it('should render 3 categories with exact titles and badge counts (5, 5, 9)', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.skills-category-card');
    expect(cards.length).toBe(3);

    const expectedCategories = [
      { name: 'Front-end', count: 5, items: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Bootstrap'] },
      { name: 'Outils & Design', count: 5, items: ['Git', 'GitHub', 'Vercel', 'CapCut', 'Canva'] },
      {
        name: 'Outils IA',
        count: 9,
        items: ['Claude', 'ChatGPT', 'Copilot', 'Google Stitch', 'Cline', 'Cursor', 'Gemini', 'HeyGen', 'ElevenLabs'],
      },
    ];

    cards.forEach((card, index) => {
      const exp = expectedCategories[index];
      const title = card.querySelector('h3')?.textContent?.trim();
      expect(title).toBe(exp.name);

      const badges = card.querySelectorAll('.skill-badge');
      expect(badges.length).toBe(exp.count);

      const badgeTexts = Array.from(badges).map((b) => b.textContent?.trim());
      expect(badgeTexts).toEqual(exp.items);
    });
  });
});
