import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../interfaces/funcionario.interface';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private urlApi: string = "http://192.168.0.28:8080/api/empleado/"
  private httpHeades = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]>{

   return this.http.get<Funcionario[]>(this.urlApi);

  }
  crearFuncionario(funcionario: Funcionario): Observable<Funcionario>{

    return this.http.post<Funcionario>(this.urlApi, funcionario, {headers: this.httpHeades});

  }
}
 