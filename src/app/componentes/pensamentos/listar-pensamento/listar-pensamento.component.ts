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

  constructor() { }

  //Toda logica que deve ser executada assim que o componente for carregado, deve ficar aqui
  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

}
