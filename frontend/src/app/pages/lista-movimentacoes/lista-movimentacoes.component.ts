import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-movimentacoes',
  templateUrl: './lista-movimentacoes.component.html',
  styleUrls: ['./lista-movimentacoes.component.css']
})
export class ListaMovimentacoesComponent implements OnInit {

  container : any

  movimentacoes : any

  constructor()
  {
    this.container = history.state.data;

    this.movimentacoes = this.container.movimentacao;

    console.log(this.container)
    console.log(this.movimentacoes)
  }

  ngOnInit(): void {
  }

}
