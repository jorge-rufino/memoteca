import { PensamentoService } from './../pensamento.service';
import { Component, OnInit, inject } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  //Outra forma de fazer a Injeção de Dependecia
  private pensamentoService = inject(PensamentoService);

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  temMaisPensamentos: boolean = true;
  filtro:string = '';

  constructor() { }

  //Toda logica que deve ser executada assim que o componente for carregado, deve ficar aqui
  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  //Toda vez que for clicado no botao ele irá incrimentar para a próxima página da paginação
  carregarMaisPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      //Como queremos que a lista seja expandida mostrando os novos elementos, vamos adicionar na lista os novos elementos
      //da próxima página
      this.listaPensamentos.push(...listaPensamentos);

      //Se o tamanho da lista for 0, quer dizer que não tem mais elementos
      if(!listaPensamentos.length){
        this.temMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos() {
    this.temMaisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService.listar(this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    })
  }
}
