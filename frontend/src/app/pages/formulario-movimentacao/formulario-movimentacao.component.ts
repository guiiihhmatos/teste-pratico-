import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-formulario-movimentacao',
  templateUrl: './formulario-movimentacao.component.html',
  styleUrls: ['./formulario-movimentacao.component.css']
})
export class FormularioMovimentacaoComponent implements OnInit {

  movimentacaoForm: FormGroup
  objeto = {
    "tipoMovimentacao" : "",
    "dataInicio" : "",
    "dataFim" : "",
    "container" : {
      "id" : 0
    }
  }

  constructor
  (
    private movimentacaoService : MovimentacaoService,
    private formBuilder: FormBuilder,
    private roteador: Router
  )
  {

    this.objeto.container.id = history.state.data;

    this.movimentacaoForm = this.formBuilder.group({
      tipoMovimentacao : ['', Validators.required],
		  dataInicio : ['', Validators.required],
		  dataFim : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSaveMovimentacao(movimentacao : any)
  {

    this.objeto.tipoMovimentacao = movimentacao.tipoMovimentacao
    this.objeto.dataInicio = movimentacao.dataInicio
    this.objeto.dataFim = movimentacao.dataFim

    this.movimentacaoService.onSaveMovimentacoes(this.objeto).subscribe(value => {

      this.roteador.navigate(['lista-containers'])
    },
    error => {
      console.error(error)
    })
  }

}
