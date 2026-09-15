import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  company: string;
  description: string;
  image: string;
  slug: string;
  technologies: string[];
  featured?: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class ProyectsServices {

  private projects: Project[] = [
    {
      id: 1,
      name: 'Sistema de Biblioteca',
      company: 'INFOP',
      description:
        'Sistema para la gestión de libros, usuarios, préstamos y emisión de solvencias.',
      image: 'images/proyect/bibliotecaInfop_cover.png',
      slug: 'biblioteca-infop',
      technologies: [
        'PHP - Laravel',
        'Node.js',
        'MySQL',
        'Bootstrap'
      ],
      featured: false
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
        'Angular',
        'Node.js',
        'SQL Server',
        'PrimeNG'
      ],
      featured: true
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
        'Angular',
        'Spring Boot',
        'PostgreSQL',
        'Tailwind CSS'
      ],
      featured: true
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
        'PHP - Laravel',
        'Spring Boot',
        'MySQL',
        'Tailwind CSS'
      ],
      featured: false
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
        'Spring Boot',
        'PostgreSQL',
        'Tailwind CSS'
      ],
      featured: true
    }
  ];


  getProjects(): Project[] {
    return this.projects;
  }


  getFeaturedProjects(): Project[] {
    return this.projects.filter(
      project => project.featured
    );
  }


  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(
      project => project.slug === slug
    );
  }

}
