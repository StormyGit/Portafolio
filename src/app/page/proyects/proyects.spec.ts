import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyects } from './proyects';

describe('Proyects', () => {
  let component: Proyects;
  let fixture: ComponentFixture<Proyects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
