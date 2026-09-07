import { Component } from '@angular/core';

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  items: SkillItem[];
}

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  readonly categories: SkillCategory[] = [
    {
      name: 'Front-end',
      items: [
        { name: 'Angular', icon: 'angular icon.jpg' },
        { name: 'TypeScript', icon: 'typescript icon.png' },
        { name: 'HTML', icon: 'html icon.png' },
        { name: 'CSS', icon: 'css icon.png' },
        { name: 'Bootstrap', icon: 'bootstrap icon.jpg' },
      ],
    },
    {
      name: 'Développement & déploiement',
      items: [
        { name: 'Git', icon: 'git icon.png' },
        { name: 'GitHub', icon: 'icon github.jpg' },
        { name: 'Vercel', icon: 'icon vercel.jpg' },
      ],
    },
    {
      name: 'IA & développement assisté',
      items: [
        { name: 'ChatGPT', icon: 'icon chatgpt.jpg' },
        { name: 'Claude', icon: 'icon claude.jpg' },
        { name: 'GitHub Copilot', icon: 'icon copilot.jpg' },
        { name: 'Gemini', icon: 'icon gemini.jpg' },
        { name: 'Cursor', icon: 'icon cursor.jpg' },
        { name: 'Cline', icon: 'icon cline.png' },
      ],
    },
    {
      name: 'Création digitale',
      items: [
        { name: 'Canva', icon: 'icon canva.jpg' },
        { name: 'CapCut', icon: 'capcut icon.png' },
        { name: 'HeyGen', icon: 'heygen icon.webp' },
        { name: 'ElevenLabs', icon: 'eleven lab icon.jpg' },
        { name: 'Google Stitch', icon: 'icon stitch.jpg' },
      ],
    },
  ];
}
