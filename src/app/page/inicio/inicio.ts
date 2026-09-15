import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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

  projects: Project[] = [
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
