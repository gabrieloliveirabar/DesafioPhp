import { useNavigate } from "react-router-dom";
import FadeInAnimation from "../../Components/Animation/FadeInAnimation";
import { Form } from "../../Components/Form";
import { toastSuccess } from "../../Components/ToastConfig";
import api from "../../services/api";
import { ITurmasRequest } from "../../interfaces/turmas";
import { Input } from "../../Components/Input";
import { ToastContainer } from "react-toastify";

export const Login = () => {

    const navigate = useNavigate();
    const onSubmitFunctionLogin= async (data: ITurmasRequest) => {
        const res = await api.post("api/auth/login", data);
        console.log(res)
       
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        const token = localStorage.getItem("@TOKEN");
    
        const { id}: any = res.data.user;
    
        window.localStorage.setItem("@USERID", id);
    
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        if (res.status === 200) {
          toastSuccess("cadastro realizado")
          navigate("/turmas")
        }
      };
    
    return (
      <div>
        <FadeInAnimation>
          <div className="w-screen h-screen">
          <header className="h-16 shadow-md flex justify-center items-center  ">
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
            <div className="flex justify-center items-center h-full">
              <Form onSubmit={onSubmitFunctionLogin}>
                {({ register, errors }) => (
                  <>
                    <h1 className="w-full text-center font-bold mt-3">
                     Login Usuário
                    </h1>
                   
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
                    
                    <button className=" text-white  bg-background_button text-xs font-normal mb-3 w-full h-8 pl-2 rounded b-none bg-input_background shadow-md shadow-black focus:outline-none  lg:w-96 lg:h-10">
                      Login
                    </button>
                  </>
                )}
              </Form>
            </div>
          </div>
  
          <ToastContainer />
        </FadeInAnimation>
      </div>
    );
  };