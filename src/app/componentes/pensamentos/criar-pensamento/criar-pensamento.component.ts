import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo:'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    const form = document.querySelector('form') as HTMLFormElement;
    form!.addEventListener('submit', (evento) => {
      evento.preventDefault();
    })
    alert("clicou");
  }

  cancelar() {
    alert("clicou");
  }
}
