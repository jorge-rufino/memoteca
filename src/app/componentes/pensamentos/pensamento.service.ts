import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  listar(pagina: number, filtro: string, favoritos?: boolean): Observable<Pensamento[]> {
    const itensPorPagina = 6;

    let parametros = new HttpParams()
        .set('_page', pagina)
        .set('_limit', itensPorPagina)
        .set('_sort', 'id')
        .set('_order', 'desc');

    //Se tiver pelo menos 2 letras para serem pesquisadas, ele faz o filtro
    if(filtro.trim().length > 2){
      parametros = parametros.set('q', filtro);
    }

    if(favoritos) {
      parametros = parametros.set('favorito', true);
    }

    //Se tivesse escrito a variavel "parametros" como "params", poderiamos passa-la direto pois estaria sobrescrevendo "params"
    return this.http.get<Pensamento[]>(this.APIurl, { params: parametros });

//  Paginacao sem o HttpParams
//  return this.http.get<Pensamento[]>(`${this.APIurl}?_page=${pagina}&_limit=${itensPorPagina}`);
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.APIurl, pensamento);
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.APIurl}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.APIurl}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.APIurl}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento);
  }
}
