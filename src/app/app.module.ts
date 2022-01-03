import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { SolicitantesComponent } from './pages/solicitantes/solicitantes.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FuncionariosFormComponent } from './pages/funcionarios/funcionarios-form/funcionarios-form.component';
import { SolicitantesFormComponent } from './pages/solicitantes/solicitantes-form/solicitantes-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TramitesComponent,
    SolicitantesComponent,
    FuncionariosComponent,
    FuncionariosFormComponent,
    SolicitantesFormComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
