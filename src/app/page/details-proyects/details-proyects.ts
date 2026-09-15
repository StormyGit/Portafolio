import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import {
  Project,
  ProyectsServices
} from '../../services/proyects-services';

@Component({
  selector: 'app-details-proyects',

  imports: [
    RouterLink
  ],

  templateUrl: './details-proyects.html',
  styleUrl: './details-proyects.css',
})
export class DetailsProyects implements OnInit {

  private route = inject(ActivatedRoute);

  private projectsService =
    inject(ProyectsServices);


  project?: Project;


  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.project =
      this.projectsService.getProjectById(id);

  }

}
