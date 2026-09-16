import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProyectsServices } from '../../services/proyects-services';
import { ProjectCard } from '../../components/project-card/project-card';

interface Project {
  id: number;
  name: string;
  company: string;
  description: string;
  image: string;
  slug: string;
  technologies: string[];
}

@Component({
  selector: 'app-inicio',
  imports: [
    RouterLink,
    ProjectCard
],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  srvProyect = inject(ProyectsServices);

  projects = this.srvProyect.getFeaturedProjects();

}
