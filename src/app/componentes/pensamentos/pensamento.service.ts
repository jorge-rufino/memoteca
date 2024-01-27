import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Este decorator que permite que o Service seja injetavel em outros componentes (Injeção de Dependencia)
//"root" quer dizer que ele está visível para toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  //Quando passamos o modificador de acesso no construtor, automaticamente é criado um atributo de classe de mesmo nome
  constructor(private http: HttpClient) { }
}
