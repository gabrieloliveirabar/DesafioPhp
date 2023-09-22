import { ITurmas } from "../../interfaces/turmas";
import api from "../../services/api";
import { toastError, toastSuccess } from "../ToastConfig";

export const Turma = ({
  codigo,
  data_inicio,
  data_fim,
  quantidade_maxima_alunos,
  alunos,
  id,
}: ITurmas) => {

    const openTurma = async () => {
        const idUser = localStorage.getItem("@USERID");
        const data = {
            aluno_id: idUser,
            turma_id: id
        }
        const token = localStorage.getItem("@TOKEN");
        api.defaults.headers.common.Authorization = `Bearer ${token}`;


        const res = await api.post("api/turmas/users", data);
        console.log(res)
       
        if (res.status === 201) {
          toastSuccess("cadastrado na turma")
        }
      };

  return (
    <li key={id} className="w-full h-16 rounded bg-slate-200 boder">
      <div className="h-full text-base   text-center font-medium  flex justify-start items-center gap-3 p-3">
        <p>{codigo}</p>
        <div className="flex justify-center items-center gap-3">
          <p>{data_inicio}</p>
          <p>{data_fim}</p>
        </div>
        <div>
          <p>{quantidade_maxima_alunos + "/" + alunos.length}</p>
              </div>
              {
                  alunos.length === 3?<div><button className={ `text-white  bg-zinc-500 text-xs flex items-center justify-centerfont-normal  w-16 h-6  rounded b-none bg-input_background shadow-sm focus:outline-none  `} >
                  entrar
                </button></div>:  <button className={ `text-white  bg-background_button text-xs flex items-center justify-centerfont-normal  w-16 h-6  rounded b-none bg-input_background shadow-sm focus:outline-none  `} onClick={openTurma}>
                  entrar
                </button>
              }
      
      </div>
    </li>
  );
};
