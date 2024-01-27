import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

//Este decorator que permite que o Service seja injetavel em outros componentes (Injeção de Dependencia)
//"root" quer dizer que ele está visível para toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly APIurl = 'http://localhost:3000/pensamentos';

  //Quando passamos o modificador de acesso no construtor, automaticamente é criado um atributo de classe de mesmo nome
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.APIurl);
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.APIurl, pensamento);
  }
}
