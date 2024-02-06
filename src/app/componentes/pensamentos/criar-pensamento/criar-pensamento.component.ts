import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from 'src/app/validators/minusculoValidators';

interface MeuFormulario {
  conteudo: any;
  autoria: any;
  modelo: any;
  favorito: any;
}

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {



  formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group<MeuFormulario>({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)    //Não permite salvar usando somente espaços em branco
      ])],
      autoria: ['',[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(/\S.*\S/),           //Aceita somente 1 espaço em branco entre caracteres
          minusculoValidator
        ]
      ],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  criarPensamento() {
    //console.log(this.formulario.get('conteudo')?.errors);   //Mostra os erros dos validators
    this.formulario.controls['autoria'].setValue(this.formulario.controls['autoria'].value.trim());

    if(this.formulario.valid){
      this.pensamentoService.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
