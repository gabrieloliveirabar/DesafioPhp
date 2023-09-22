interface IInput {
  register: any;
  errors: any;
  name: string;
  label: string;
  placeHolder: string;
  type: string
}

export const Input = ({
  register,
  errors,
  name,
  label,
  placeHolder,
  type
}: IInput) => {
  return (
    <>
      <label htmlFor={name} className="w-52 mt-2 text-lef lg:w-96">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        {...register(name)}
        className="text-white text-xs font-normal mb-3 w-52 h-8 pl-2 rounded b-none bg-input_background shadow-md shadow-black focus:outline-none  lg:w-96 lg:h-10"
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </>
  );
};
