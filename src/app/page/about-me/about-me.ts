import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {

  frontend = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Alpine.js'
  ];

  backend = [
    'Spring Boot',
    'Laravel',
    'Node.js',
    '.NET'
  ];

  databases = [
    'MySQL',
    'MariaDB',
    'PostgreSQL'
  ];

  tools = [
    'Git',
    'GitHub',
    'APIs REST'
  ];

}
