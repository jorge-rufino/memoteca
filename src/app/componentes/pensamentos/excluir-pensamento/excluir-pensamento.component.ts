import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('teste:',this.route.snapshot);
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe( (pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe( () => {
        this.router.navigate(['/listarPensamento']);
      })
    } else {
      throw Error('Não foi possível excluir o pensamento');
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
