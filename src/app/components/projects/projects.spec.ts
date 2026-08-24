import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PROJECTS } from '../../data/projects';
import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have id="projects" on the root section for anchor navigation', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#projects')).toBeTruthy();
  });

  it('should expose the 4 projects from data signal', () => {
    expect(component.projects().length).toBe(4);
    expect(component.projects()).toEqual(PROJECTS);
  });

  it('should render all 4 project cards with complete fields and links', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');
    expect(cards.length).toBe(4);

    cards.forEach((card, index) => {
      const exp = PROJECTS[index];

      // Title & Tagline
      const title = card.querySelector('h3')?.textContent?.trim();
      const tagline = card.querySelector('.tagline')?.textContent?.trim();
      expect(title).toBe(exp.title);
      expect(tagline).toBe(exp.tagline);

      // Problem & Solution
      const problem = card.querySelector('.problem')?.textContent?.trim();
      const solution = card.querySelector('.solution')?.textContent?.trim();
      expect(problem).toBe(exp.problem);
      expect(solution).toBe(exp.solution);

      // Image
      const img = card.querySelector('.project-image img') as HTMLImageElement;
      expect(img).toBeTruthy();
      expect(img.getAttribute('src')).toBe(exp.image);
      expect(img.getAttribute('alt')).toBe(exp.title);

      // Tech badges
      const techBadges = card.querySelectorAll('.project-techs .skill-badge');
      expect(techBadges.length).toBe(exp.techs.length);
      const techTexts = Array.from(techBadges).map((b) => b.textContent?.trim());
      expect(techTexts).toEqual(exp.techs);

      // Demo & GitHub links
      const demoLink = card.querySelector('a.project-link-demo') as HTMLAnchorElement;
      const githubLink = card.querySelector('a.project-link-github') as HTMLAnchorElement;

      expect(demoLink).toBeTruthy();
      expect(demoLink.getAttribute('href')).toBe(exp.demoUrl);
      expect(demoLink.getAttribute('target')).toBe('_blank');
      expect(demoLink.getAttribute('rel')).toBe('noopener');
      expect(demoLink.textContent?.trim()).toBe('Voir la démo');

      expect(githubLink).toBeTruthy();
      expect(githubLink.getAttribute('href')).toBe(exp.githubUrl);
      expect(githubLink.getAttribute('target')).toBe('_blank');
      expect(githubLink.getAttribute('rel')).toBe('noopener');
      expect(githubLink.textContent?.trim()).toBe('Code source');
    });
  });
});
