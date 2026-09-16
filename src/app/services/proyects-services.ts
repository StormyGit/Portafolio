import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  company: string;
  description: string;
  functionality: string[];
  phases?: string[];
  startDate: string;
  endDate: string;
  image: string;
  slug: string;
  technologies: string[];
  featured?: boolean;
  capturas: Captura[];
}

export interface Captura {
  id: number;
  nombre?: string;
  image: string;
  descripcion?: string;
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

    functionality: [
      'Registro y administración de libros',
      'Gestión de usuarios',
      'Control de préstamos',
      'Emisión de solvencias'
    ],

    phases: [],

    startDate: 'Septiembre 2024',
    endDate: 'Marzo 2025',

    image: 'images/proyect/bibliotecaInfop_cover.png',

    slug: 'biblioteca-infop',

    technologies: [
      'PHP - Laravel',
      'Node.js',
      'MySQL',
      'Bootstrap'
    ],
    capturas:[]
  },


  {
    id: 2,
    name: 'Sistema de Gestión de Becas',
    company: 'DICITH - UNAH',

    description:
      'Plataforma para la gestión y seguimiento de becas académicas desarrollada durante mi práctica profesional.',

    functionality: [
      'Gestión de información relacionada con becas académicas',
      'Seguimiento de procesos de becas',
      'Administración de información dentro de la plataforma'
    ],

    phases: [
      'Participación en la segunda fase del proyecto'
    ],

    startDate: 'Enero 2025',
    endDate: 'Julio 2025',

    image: 'images/proyect/diciht_cover.png',

    slug: 'becas-unah',

    technologies: [
      'Angular',
      'Node.js',
      'SQL Server',
      'PrimeNG'
    ],
    featured: true,
    capturas:[
      {
        id: 0,
        nombre: 'Login de la plataforma',
        image: 'images/proyect/diciht_cover.png',
        descripcion:
          ''
      },
      {
        id: 1,
        nombre: 'Creacion de formularios Dinamicos',
        image: 'images/proyect/diciht_01.png',
        descripcion:
          ''
      },
      {
        id: 1,
        nombre: 'estructuracion del formulario dinamico antes de ser aprobado',
        image: 'images/proyect/diciht_02.png',
        descripcion:
          ''
      },
      {
        id: 1,
        nombre: 'gestion y almacenamiendo de documento por solicitud',
        image: 'images/proyect/diciht_04.png',
        descripcion:
          ''
      },
      {
        id: 1,
        nombre: 'Menu desplegable de mantenimiento',
        image: 'images/proyect/diciht_05.png',
        descripcion:
          ''
      },
    ]
  },


  {
    id: 3,
    name: 'Red Social de Celaque',
    company: 'SITGLOBALS',

    description:
      'Plataforma web tipo red social orientada a la interacción entre propietarios, inversionistas y negocios.',

    functionality: [
      'Gestión de publicaciones',
      'Sistema de notificaciones',
      'Administración de contenido',
      'Interacción entre usuarios de la plataforma'
    ],

    phases: [],

    startDate: 'Julio 2025',
    endDate: 'Noviembre 2025',

    image: 'images/proyect/celaque_cover.jpeg',

    slug: 'red-social-celaque',

    technologies: [
      'Angular',
      'Spring Boot',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    featured: true,
    capturas:[
      {
        id: 0,
        nombre: 'Login de la plataforma',
        image: 'images/proyect/celaque_cover.jpeg',
        descripcion:
          ''
      },
      {
        id: 1,
        nombre: 'feed principal',
        image: 'images/proyect/celaque_02.jpeg',
        descripcion:
          ''
      },
      {
        id: 2,
        nombre: 'Buscador de Usuarios',
        image: 'images/proyect/celaque_01.jpeg',
        descripcion:
          ''
      },
      {
        id: 2,
        nombre: 'Vista de Resporte',
        image: 'images/proyect/celaque_03.jpeg',
        descripcion:
          ''
      },
      {
        id: 2,
        nombre: 'Vista de denuncias',
        image: 'images/proyect/celaque_04.jpeg',
        descripcion:
          ''
      },
    ]
  },


  {
    id: 4,
    name: 'Automatización de Flujos',
    company: 'SITGLOBALS',

    description:
      'Solución enfocada en automatizar tareas, formularios y el seguimiento de procesos administrativos.',

    functionality: [
      'Automatización de procesos internos',
      'Gestión de tareas',
      'Gestión de formularios',
      'Seguimiento de flujos administrativos'
    ],

    phases: [],

    startDate: 'Enero 2026',
    endDate: 'Mayo 2026',

    image: 'images/proyect/ICF-cover.png',

    slug: 'automatizacion-icf',

    technologies: [
      'PHP - Laravel',
      'Spring Boot',
      'MySQL',
      'Tailwind CSS'
    ],
    capturas:[]
  },


  {
    id: 5,
    name: 'Registro de Incidentes CCE',
    company: 'Cuerpo de Bomberos de Honduras',

    description:
      'Sistema web y aplicación móvil para registrar y dar seguimiento a incidentes en diferentes regionales del país.',

    functionality: [
      'Registro de incidentes',
      'Seguimiento de incidentes',
      'Gestión de información por regional',
      'Aplicación móvil para Android'
    ],

    phases: [],

    startDate: 'Julio 2026',
    endDate: 'Actualidad',

    image: 'images/proyect/CEE_cover.png',

    slug: 'registro-incidentes-cce',

    technologies: [
      'Angular',
      'Ionic',
      'Spring Boot',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    featured: true,
    capturas:[]
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

  getProjectById(id: number): Project | undefined {

    return this.projects.find(
      project => project.id === id
    );

  }

}
