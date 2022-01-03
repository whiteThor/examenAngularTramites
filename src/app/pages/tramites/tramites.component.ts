import { Component, OnInit } from '@angular/core';
import { Tramite } from 'src/app/interfaces/tramite.interface';
import { TramitesService } from 'src/app/services/tramites.service';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {


  constructor(private tramitesService: TramitesService) { }

  tramites: Tramite[] = [];

  ngOnInit(): void {
   this.tramitesService.getFuncionarios().subscribe(tramites => {
    this.tramites = tramites;
    console.log(this.tramites);
   });
  }
}
