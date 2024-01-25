import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //Este decorator é utilizado para dizer que este objeto será alimentado por um componente Pai, no nosso caso o Pai
  //é o componente ListarPensamentos. Então no html deste componente, nós setamos o objeto quei irá alimenta-lo
  //através de PropertyBinding. Consequentemente os valores que estão definidos agora serão sobrescritos.
  @Input()
  pensamento = {
    conteudo: 'I Love Angular',
    autoria: 'Jorge Rufino',
    modelo: 'modelo3'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
