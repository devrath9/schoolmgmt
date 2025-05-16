import { FieldError } from "react-hook-form";

type InputFieldProps={
    label:string;
    type?:string;
    name:string;
    defaultValue:string;
    register:any;
    error?:FieldError;
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({label, type="text", name, defaultValue, register, error, inputProps }: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-gray-500 text-xs">{label}</label>
        <input 
          type={type} 
          {...register(name)}
          className="p-2 ring-[1.5px] ring-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
          {...inputProps}
          defaultValue={defaultValue}/>
        {error?.message && <p className="text-xs  text-red-500">{error?.message}</p>}
      
    </div>
  )
}

export default InputField
