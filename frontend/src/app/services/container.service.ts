import { Container } from './../model/container';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  private apiUrl = "http://localhost:8080/api/containers/"

  constructor
  (
    private httpClient: HttpClient
  )
  { }

  onSaveContainers(container: Container) : Observable<any>
  {
    return this.httpClient.post<any>(this.apiUrl, container)
  }

  onGetAllContainers() : Observable<any[]>
  {
    return this.httpClient.get<any[]>(this.apiUrl)
  }

  onDeleteContainer(id : any) : Observable<any>
  {
    return this.httpClient.delete<any>(this.apiUrl + "delete/" + id)
  }
}
