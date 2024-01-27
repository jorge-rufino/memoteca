import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

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
  pensamento: Pensamento = {
    id: 0,
    conteudo: 'I Love Angular',
    autoria: 'Jorge Rufino',
    modelo: 'modelo3'
  };

  constructor() { }

  ngOnInit(): void {
  }

  //Retorna a classe no CSS que é responsavel por mudar o tamanho do card de acordo com o tamanho do conteudo
  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
