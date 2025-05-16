"use client"
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from "../InputField";
import Image from "next/image";

const validationSchema = z.object({
  username: z
  .string()
  .min(3, {message:"Username must be atleast 3 characters"})
  .max(20, {message:"Username must be atmost 20 characters"}),

  email: z
  .string()
  .email({message:"Invalid Email address"}),

  password: z
  .string()
  .min(8, {message:"Password must be atleast 8 characters"}),

    
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(9, { message: "Valid Phone Number is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
   sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  img: z.instanceof(File, { message: "Image is required" })
  
});

type Inputs =z.infer<typeof validationSchema> 

const TeacherForm = ({type, data}:
    {
    type:"create"|"update", 
    data?:any
}) => {

    const {register, handleSubmit,formState: { errors }} = useForm<Inputs>({resolver: zodResolver(validationSchema),})
     const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5  p-4">
        <h1 className="text-xl font-semibold">Create a new teacher</h1>
        <span className="text-xs text-gray-500 font-semibold">Authentication Information</span>
        <div className="flex flex-wrap justify-between gap-4">
            <InputField 
         label="Username" 
         name="username" 
         defaultValue={data?.username} 
         register={register} 
         error={errors?.username}/>

         <InputField 
         label="Email" 
         name="email" 
         defaultValue={data?.email} 
         register={register} 
         error={errors?.email}/>

         <InputField 
         label="Password" 
         name="password" 
         defaultValue={data?.password} 
         register={register} 
         error={errors?.password}/>
        </div>

        <p className="text-xs text-gray-500 font-semibold">Personal Information</p>

        <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />


        <div className="flex flex-col gap-2 w-full md:w-1/4">
             <label className="text-gray-500 text-xs">Sex</label>
             <select 
              {...register("sex")}
              className="p-2 ring-[1.5px] ring-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-green-400" 
              defaultValue={data?.sex}>
               <option value=''>Select Gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
             </select>
        {errors.sex?.message && <p className="text-xs text-red-500">{errors.sex?.message}</p>}
      
    
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4  justify-center">
             <label className="flex gap-2 items-center cursor-pointer text-sm" htmlFor="img">
             <Image src='/upload.png' alt='' width={24} height={24}/>
             <span>Upload Photo</span>
             </label>
             <input type="file" id="img" className="p-2  rounded-md text-sm bg-white" hidden/>

             
        {errors.img?.message && <p className="text-xs text-red-500">{errors.img?.message}</p>}
      
    
        </div>
        
        </div>

       
           

       

        <button type="submit"
        className="bg-green-500 rounded-md text-white px-4 py-2 w-full self-center">
            {type==="create" ?"Create" :"Update"}
        </button>


      
    </form>
  )
}

export default TeacherForm
