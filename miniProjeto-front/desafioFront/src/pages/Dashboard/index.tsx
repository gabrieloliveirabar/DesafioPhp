import { IUserRequest } from "../../interfaces/user";

import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import { ITurmasRequest } from "../../interfaces/turmas";
import { toastSuccess } from "../../Components/ToastConfig";
import FadeInAnimation from "../../Components/Animation/FadeInAnimation";
import { Form } from "../../Components/Form";
import { Input } from "../../Components/Input";

export const Dashboard = () => {
  const navigate = useNavigate();
  const onSubmitFunctionRegisterUser = async (data: IUserRequest) => {
    const res = await api.post("api/users", data);
   
    if (res.status === 201) {
      toastSuccess("cadastro realizado")
      navigate("/login")
    }
  };
  const onSubmitFunctionRegisterTurmas = async (data: ITurmasRequest) => {
    console.log(data)
    const res = await api.post("api/turmas", data);
   
    if (res.status === 201) {
      toastSuccess("cadastro realizado")
      navigate("/turmas")
    }
  };

  return (
    <div className="w-screen h-screen ">
      <FadeInAnimation>
        <div className="w-screen h-screen ">
          <header className="h-16 shadow-md flex justify-center items-center">
            <nav>
              <ul className="w-full h-full flex justify-center items-center gap-2">
                <li>
                  <a href="/turmas" className=" p-0 text-2xl font-medium text-neutral-950 border border-transparent no-underline hover:border-y-black hover:text-neutral-800">Turmas</a>
                </li>
                <li>
                  <a href="/login" className=" p-0 text-2xl font-medium text-neutral-950 border border-transparent no-underline hover:border-y-black hover:text-neutral-800">Login</a>
                </li>
                <li>
                  <a href="/" className=" p-0 text-2xl font-medium text-neutral-950 border border-transparent no-underline hover:border-y-black hover:text-neutral-800">Inicio</a>
                </li>
              </ul>
            </nav>
          </header>
          <div className=" w-full h-full flex flex-col phone:flex-row  justify-center items-center">
            <div className=" w-full h-1/2 phone:w-1/2 phone:h-full rounded  drop-shadow-2xl ">
              <div className="w-full h-[335px]  phone:h-full phone:w-full overscroll-contain overflow-y-scroll phone:overflow-y-auto flex justify-center items-start pb-2">
                <Form onSubmit={onSubmitFunctionRegisterUser}>
                  {({ register, errors }) => (
                    <>
                      <h1 className="w-full text-center font-bold mt-3">
                        Cadastro Usuário
                      </h1>
                      <Input
                        label="Nome"
                        name="name"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite seu nome"
                      />
                      <Input
                        label="Email"
                        name="email"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite seu email"
                      />
                      <Input
                        label="Senha"
                        name="password"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite seu password"
                      />
                      <Input
                        label="CPF"
                        name="cpf"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite seu cpf"
                      />
                      <Input
                        label="Sexo"
                        name="sexo"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite seu sexo"
                      />
                      <Input
                        label="Data de nascimento"
                        name="data_nascimento"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite seu nome"
                      />
                      <Input
                        label="Renda Mensal"
                        name="renda_mensal"
                        register={register}
                        errors={errors}
                        type={"number"}
                        placeHolder="digite sua renda mensal"
                      />
                      <button className=" text-white  bg-background_button text-xs font-normal mb-3 w-full h-8 pl-2 rounded b-none bg-input_background shadow-md shadow-black focus:outline-none  lg:w-96 lg:h-10">
                        Cadastrar
                      </button>
                    </>
                  )}
                </Form>
              </div>
            </div>
            <div className=" w-full h-1/2 phone:w-1/2 phone:h-full rounded bg-slate-400">
              <div className="w-full h-[335px]  phone:h-full phone:w-full overscroll-contain overflow-y-scroll phone:overflow-y-auto flex justify-center items-start pb-2">
                <Form onSubmit={onSubmitFunctionRegisterTurmas}>
                  {({ register, errors }) => (
                    <>
                      <h1 className="w-full text-center font-bold mt-3">
                        Cadastro Turma
                      </h1>
                      <Input
                        label="Codigo"
                        name="codigo"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite o codigo da truma"
                      />
                      <Input
                        label="Data inicio"
                        name="data_inicio"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite a data de inicio"
                      />
                      <Input
                        label="Data fim"
                        name="data_fim"
                        register={register}
                        errors={errors}
                        type={"text"}
                        placeHolder="digite a data de fim"
                      />
                      <Input
                        label="Quant. maxima de alunos "
                        name="quantidade_maxima_alunos"
                        register={register}
                        errors={errors}
                        type={"number"}
                        placeHolder="digite quantidade de alunos"
                      />
                
                      <button className=" text-white  bg-background_button text-xs font-normal mb-3 w-full h-8 pl-2 rounded b-none bg-input_background shadow-md shadow-black focus:outline-none  lg:w-96 lg:h-10">
                        Cadastrar
                      </button>
                    </>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </div>
  );
};
