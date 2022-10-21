import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private apiUrl = environment.apiUrl + "/api/movimentacao/"

  constructor
  (
    private httpClient : HttpClient
  )
  { }

  onGetAllMovimentacoes(id : any) : Observable<any>
  {
    return this.httpClient.get<any>(this.apiUrl + id)
  }

  onSaveMovimentacoes(movimentacao: any) : Observable<any>
  {
    return this.httpClient.post<any>(this.apiUrl, movimentacao)
  }
}
