import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Funcionario } from '../../../interfaces/funcionario.interface';
import { FuncionariosService } from '../../../services/funcionarios.service';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {
  funcionario: Funcionario = new Funcionario() ;

  constructor(private funcionariosService: FuncionariosService,  private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    console.log(this.funcionario);
    this.funcionariosService.crearFuncionario(this.funcionario).subscribe(funcionario => {

      console.log("funcionario creado con exito!!!")
      this.router.navigate(['/funcionarios'])
      Swal.fire('Nuevo Funcionario', `Funcionario ${funcionario.nombres} creado con éxito!`, 'success')

    })
  }

}

