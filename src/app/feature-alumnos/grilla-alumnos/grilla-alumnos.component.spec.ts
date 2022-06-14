import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaAlumnosComponent } from './grilla-alumnos.component';

describe('GrillaAlumnosComponent', () => {
  let component: GrillaAlumnosComponent;
  let fixture: ComponentFixture<GrillaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
