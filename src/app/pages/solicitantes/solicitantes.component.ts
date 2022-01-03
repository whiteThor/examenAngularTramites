import { Component, OnInit } from '@angular/core';
import { Solicitante } from 'src/app/interfaces/solicitante.interface';
import { SolicitantesService } from 'src/app/services/solicitantes.service';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.css']
})
export class SolicitantesComponent implements OnInit {

  constructor(private solicitantesService: SolicitantesService) { }

  solicitantes: Solicitante[] = [];

  ngOnInit(): void {
   this.solicitantesService.getSolicitantes().subscribe(solicitantes => {
    this.solicitantes = solicitantes;
    console.log(this.solicitantes);
   });
  }

}
