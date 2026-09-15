import { Routes } from '@angular/router';
import { Inicio } from './page/inicio/inicio';
import { LayoutApp } from './layout/layout-app/layout-app';
import { AboutMe } from './page/about-me/about-me';
import { Proyects } from './page/proyects/proyects';
import { DetailsProyects } from './page/details-proyects/details-proyects';

export const routes: Routes = [

  {path: "portafolio", component: LayoutApp, children: [
    {path: "", component: Inicio},
    {path: "proyectos", component: Proyects},
    {path: "sobre-mi", component: AboutMe},
    {path: 'proyectos/:id', component: DetailsProyects},
  ]},

  {path: "**", redirectTo: "portafolio"}
];
