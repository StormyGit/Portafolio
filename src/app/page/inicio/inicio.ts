import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProyectsServices } from '../../services/proyects-services';

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
    RouterLink
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  srvProyect = inject(ProyectsServices);

  projects = this.srvProyect.getFeaturedProjects();

}
