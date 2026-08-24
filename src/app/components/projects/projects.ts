import { Component, signal } from '@angular/core';
import { Project, PROJECTS } from '../../data/projects';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  readonly projects = signal<Project[]>(PROJECTS);
}
