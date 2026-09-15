import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProyects } from './details-proyects';

describe('DetailsProyects', () => {
  let component: DetailsProyects;
  let fixture: ComponentFixture<DetailsProyects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsProyects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProyects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
