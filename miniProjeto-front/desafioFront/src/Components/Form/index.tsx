import { ReactNode } from "react";
import { FieldValues,  useForm } from "react-hook-form";

interface IForm<T> {
  children: (props: { register: any; errors: any }) => ReactNode;
  onSubmit: (data: T) => void;
  
}


export const Form =<T extends object> ({ children, onSubmit }: IForm<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({});

  const handleFormSubmit = (data: T) => {
    onSubmit(data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col h-full justify-center items-center w-56 tablet:w-2/3  "
    >
      {children({ register, errors })}
     
    </form>
  );
};
