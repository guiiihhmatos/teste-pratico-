import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMovimentacaoComponent } from './formulario-movimentacao.component';

describe('FormularioMovimentacaoComponent', () => {
  let component: FormularioMovimentacaoComponent;
  let fixture: ComponentFixture<FormularioMovimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMovimentacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
