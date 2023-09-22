import { ToastContainer } from "react-toastify";
import FadeInAnimation from "../../Components/Animation/FadeInAnimation";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { Turma } from "../../Components/Turma";
import { ITurmas } from "../../interfaces/turmas";

export const Turmas = () => {
  const [turmasAll, setTurmasAll] = useState<ITurmas[]>([]);
  useEffect(() => {
    const getTurmas = async () => {
      const res = await api.get("api/turmas");
      setTurmasAll(res.data);
    };
    getTurmas();
  }, []);

  return (
    <div className="w-screen h-screen">
      <FadeInAnimation>
        <div className="w-screen h-screen">
          <header className="h-16 shadow-md flex justify-center items-center  ">
            <nav>
              <ul className="w-full h-full flex justify-center items-center gap-2">
                <li>
                  <a
                    href="/turmas"
                    className=" p-0 text-2xl font-medium text-neutral-950 border border-transparent no-underline hover:border-y-black hover:text-neutral-800"
                  >
                    Turmas
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className=" p-0 text-2xl font-medium text-neutral-950 border border-transparent no-underline hover:border-y-black hover:text-neutral-800"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" p-0 text-2xl font-medium text-neutral-950 border border-transparent no-underline hover:border-y-black hover:text-neutral-800"
                  >
                    Inicio
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="flex justify-center items-center text-base   text-center font-medium ">
            <div className=" flex justify-between w-96 ">
              <p>Codigo</p>
              <p>Data inicio</p>
              <p>Data fim</p>
              <p>quant/Alun</p>
            </div>
          </div>
          <div className="flex justify-center items-center h-full ">
            <ul className="w-full tablet:w-1/3 h-3/4 flex flex-col justify-start items-center gap-5 p-5 ">
              {turmasAll.map((elem) => {
                return (
                  <Turma
                    codigo={elem.codigo}
                    data_inicio={elem.data_inicio}
                    data_fim={elem.data_fim}
                    quantidade_maxima_alunos={elem.quantidade_maxima_alunos}
                    alunos={elem.alunos}
                    id={elem.id}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        <ToastContainer />
      </FadeInAnimation>
    </div>
  );
};
