import { IUser } from "../user";

export interface ITurmasRequest {
  codigo: string,
  data_inicio: string,
  data_fim: string,
  quantidade_maxima_alunos:number
}

export interface ITurmas extends ITurmasRequest{
  id: string;
  created_at: Date;
  updated_at: Date;
  alunos:IUser[]
 
}


export interface ITurmasUpdate {
  codigo?: string,
  data_inicio?: string,
  data_fim?: string,
  quantidade_maxima_alunos?:number
}


