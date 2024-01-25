import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  pensamento = {
    conteudo: 'I Love Angular',
    autoria: 'Jorge Rufino',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
