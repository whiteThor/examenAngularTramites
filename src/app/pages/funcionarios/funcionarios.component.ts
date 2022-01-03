import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/interfaces/funcionario.interface';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor(private funcionariosService: FuncionariosService) { }

  funcionarios: Funcionario[] = [];

  ngOnInit(): void {
   this.funcionariosService.getFuncionarios().subscribe(funcionarios => {
    this.funcionarios = funcionarios;
    console.log(this.funcionarios);
   });
  }

}
