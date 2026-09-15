import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProyectsServices } from '../../services/proyects-services';

interface Project {
  id: number;
  empresa?: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  company?: string;
  technologies?: string[];
}

@Component({
  selector: 'app-proyects',
  imports: [
    RouterLink
  ],
  templateUrl: './proyects.html',
  styleUrl: './proyects.css',
})
export class Proyects {

  srvProyect = inject(ProyectsServices);

  projects = this.srvProyect.getProjects();

}
