import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem ipsum arcu consequat tempus felis pharetra habitasse urna luctus, suspendisse metus fusce amet vitae nullam facilisis imperdiet class interdum, conubia augue dapibus venenatis inceptos scelerisque litora mollis. quam turpis rhoncus scelerisque fringilla lacus litora tristique proin, ',
      autoria: 'Jorge Dev',
      modelo: 'modelo1'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
