import { Funcionario } from "./funcionario.interface";
import { Solicitante } from "./solicitante.interface";

export interface Tramite {

    id:                 number;
    numeroRadicado:     number;
    anioRadicado:       string;
    nombreTramite:      string;
    descripcionTramite: string;
    solicitante:        Solicitante;
    funcionario:        Funcionario;
    fechaCreacion:      Date;
}
