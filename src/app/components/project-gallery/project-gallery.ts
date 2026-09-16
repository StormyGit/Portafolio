import {
  Component,
  HostListener,
  Input
} from '@angular/core';

import { Captura } from '../../services/proyects-services';

@Component({
  selector: 'app-project-gallery',
  imports: [],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.css',
})
export class ProjectGallery {

  @Input({ required: true })
  capturas: Captura[] = [];

  selectedCapture?: Captura;


  openModal(captura: Captura): void {
    this.selectedCapture = captura;

    document.body.style.overflow = 'hidden';
  }


  closeModal(): void {
    this.selectedCapture = undefined;

    document.body.style.overflow = '';
  }


  @HostListener('document:keydown.escape')
  onEscape(): void {

    if (this.selectedCapture) {
      this.closeModal();
    }

  }

}
