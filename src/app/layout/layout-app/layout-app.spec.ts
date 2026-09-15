import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApp } from './layout-app';

describe('LayoutApp', () => {
  let component: LayoutApp;
  let fixture: ComponentFixture<LayoutApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
