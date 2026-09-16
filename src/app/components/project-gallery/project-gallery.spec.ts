import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGallery } from './project-gallery';

describe('ProjectGallery', () => {
  let component: ProjectGallery;
  let fixture: ComponentFixture<ProjectGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
