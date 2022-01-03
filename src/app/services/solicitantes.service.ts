import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../interfaces/funcionario.interface';
import { Solicitante } from '../interfaces/solicitante.interface';

@Injectable({
  providedIn: 'root'
})
export class SolicitantesService {
  
    private urlApi: string = "http://192.168.0.28:8080/api/solicitante/"
    private httpHeades = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getSolicitantes(): Observable<Solicitante[]>{

   return this.http.get<Solicitante[]>(this.urlApi);

  }


}
 