import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitantesComponent } from './pages/solicitantes/solicitantes.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { SolicitantesFormComponent } from './pages/solicitantes/solicitantes-form/solicitantes-form.component';
import { FuncionariosFormComponent } from './pages/funcionarios/funcionarios-form/funcionarios-form.component';


const routes: Routes = [
{
  path: "solicitantes",
  component: SolicitantesComponent
},
{
  path: "funcionarios",
  component: FuncionariosComponent
},
{
  path: "tramites",
  component: TramitesComponent
},
{
  path: "funcionarios/form",
  component: FuncionariosFormComponent
},
{
  path: "solicitantes/form",
  component: SolicitantesFormComponent
},
{
  path: "**",
  redirectTo: 'tramites'

}
];


@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
