import { Grupo } from './grupo.model';

export class Despesa{
    idDespesa: number;
    nomeDespesa: string;
    grupo: Grupo
    idProprietarioDespesa: number;
    idCorrelacaoParcela: string;
    valorDespesa: number;
    valorTotal: number;
    data: string;
    parcela: number;
    parcelaTotal: number;
    tag: string;
}