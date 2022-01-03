import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tramite } from '../interfaces/tramite.interface';

@Injectable({
  providedIn: 'root'
})
export class TramitesService {
  private urlApi: string = "http://192.168.0.28:8080/api/tramites/"
  private httpHeades = new HttpHeaders({'Content-Type': 'application/json'});

constructor(private http: HttpClient) { }


getFuncionarios(): Observable<Tramite[]>{

 return this.http.get<Tramite[]>(this.urlApi);

}
}
