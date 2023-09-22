

export interface IUserRequest {
  name:string,
  email:string,
  password:string,
  cpf:string,
  sexo:string,
  data_nascimento:string,
  renda_mensal:number
}

export interface IUser extends IUserRequest{

  id: string,
  created_at: Date,
  updated_at: Date

}


export interface IUserLogin {
  email: string;
  password: string;
}

