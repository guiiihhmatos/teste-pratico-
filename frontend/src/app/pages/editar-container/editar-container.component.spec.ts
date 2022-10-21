import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContainerComponent } from './editar-container.component';

describe('EditarContainerComponent', () => {
  let component: EditarContainerComponent;
  let fixture: ComponentFixture<EditarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
