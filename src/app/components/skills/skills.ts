import { Component } from '@angular/core';

export interface SkillCategory {
  name: string;
  items: string[];
}

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  readonly categories: SkillCategory[] = [
    { name: 'Front-end', items: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Bootstrap'] },
    { name: 'Outils & Design', items: ['Git', 'GitHub', 'Vercel', 'CapCut', 'Canva'] },
    { name: 'Outils IA', items: ['Claude', 'ChatGPT', 'Copilot', 'Google Stitch', 'Cline', 'Cursor', 'Gemini', 'HeyGen', 'ElevenLabs'] },
  ];
}
