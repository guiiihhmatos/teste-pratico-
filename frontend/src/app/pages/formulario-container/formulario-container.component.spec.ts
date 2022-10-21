import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContainerComponent } from './formulario-container.component';

describe('FormularioContainerComponent', () => {
  let component: FormularioContainerComponent;
  let fixture: ComponentFixture<FormularioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
