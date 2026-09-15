import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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

  projects: Project[] = [
//
//
    {
      id: 1,
      name: 'Sistema de Biblioteca',
      company: 'INFOP',
      description:
        'Sistema para la gestión de libros, usuarios, préstamos y emisión de solvencias.',
      image: 'images/proyect/bibliotecaInfop_cover.png',
      slug: 'biblioteca-infop',
      technologies: [
        'Angular',
        'API REST',
        'Base de datos'
      ]
    },

    {
      id: 2,
      name: 'Sistema de Gestión de Becas',
      company: 'DICITH - UNAH',
      description:
        'Plataforma para la gestión y seguimiento de becas académicas desarrollada durante mi práctica profesional.',
      image: 'images/proyect/diciht_cover.png',
      slug: 'becas-unah',
      technologies: [
        'Desarrollo Web',
        'Base de datos'
      ]
    },

    {
      id: 3,
      name: 'Red Social de Celaque',
      company: 'SITGLOBALS',
      description:
        'Plataforma web tipo red social orientada a la interacción entre propietarios, inversionistas y negocios.',
      image: 'images/proyect/celaque_cover.jpeg',
      slug: 'red-social-celaque',
      technologies: [
        'Frontend',
        'Backend',
        'API REST'
      ]
    },

    {
      id: 4,
      name: 'Automatización de Flujos',
      company: 'SITGLOBALS',
      description:
        'Solución enfocada en automatizar tareas, formularios y el seguimiento de procesos administrativos.',
      image: 'images/proyect/ICF-cover.png',
      slug: 'automatizacion-icf',
      technologies: [
        'Automatización',
        'Backend'
      ]
    },

    {
      id: 5,
      name: 'Registro de Incidentes CCE',
      company: 'Cuerpo de Bomberos de Honduras',
      description:
        'Sistema web y aplicación móvil para registrar y dar seguimiento a incidentes en diferentes regionales del país.',
      image: 'images/proyect/CEE_cover.png',
      slug: 'registro-incidentes-cce',
      technologies: [
        'Angular',
        'Ionic',
        'Spring Boot'
      ]
    }

  ];

}
