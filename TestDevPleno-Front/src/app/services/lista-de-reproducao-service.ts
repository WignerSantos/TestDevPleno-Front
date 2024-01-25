import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaDeReproducao } from '../model/ListaDeReproducao';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ListaDeReproducaoService {

  constructor(private http: HttpClient) { }

  findByName(listName: string): Observable<ListaDeReproducao> {
    return this.http.get<ListaDeReproducao>(`${API_CONFIG.baseUrl}/lists/${listName}`);
  }

  findAll(): Observable<ListaDeReproducao[]> {
    return this.http.get<ListaDeReproducao[]>(`${API_CONFIG.baseUrl}/lists`)
  };

  create(listaDeReproducao: ListaDeReproducao): Observable<ListaDeReproducao> {
    return this.http.post<ListaDeReproducao>(`${API_CONFIG.baseUrl}/lists`, listaDeReproducao);
  }

  delete(listName: string): Observable<ListaDeReproducao> {
    return this.http.delete<ListaDeReproducao>(`${API_CONFIG.baseUrl}/lists/${listName}`);
  }

}
