"use client"

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(()=>import('./forms/TeacherForm'),{
  loading:()=><h1>Loading...</h1>
})
const StudentForm = dynamic(()=>import('./forms/StudentForm'),{
  loading:()=><h1>Loading...</h1>
})

const AssignmentForm = dynamic(()=>import('./forms/AssignmentForm'),{
  loading:()=><h1>Loading...</h1>
})



const forms:{
[key:string] : (type: "create" | "update", data?:any )=>JSX.Element
}={
  teacher :(type,data)=> <TeacherForm type={type} data={data}/>,
  student:(type, data)=><StudentForm type={type} data={data}/>,
  assignment:(type,data)=><AssignmentForm type={type} data={data}/>
}

const FormModal = ({table, type, id, data}:{
     table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type: "create" |"update" |"delete";
    id?:number;
    data?:any;

    
}) => {

    const size = type==="create"?"w-8 h-8":"w-7 h-7"
    const bgcolor = type==="create" ?
                                    "bg-andyYellow"
                                    : type==="update" ?"bg-andySky":"bg-andyPurple"

    const[open, setOpen] = useState(false)  
    
 const Form =()=>{return type==="delete" && id ?  (
     <form action="" className="p-4 flex flex-col gap-4">
       <p className="font-medium text-center">This data will be lost. Are you sure you want to delete this item?</p>
       <button className="w-max self-center px-4 py-2 rounded-md text-white font-semibold bg-red-500">
        Delete
       </button>
     </form>
    )
    : type==="create" || type=== "update" ?(forms[table](type,data))
    :"Form not found"
  }
     
    
  return (
    <div>
      <button onClick={()=>setOpen(true)}
        className={`${size} flex items-center justify-center rounded-full ${bgcolor}`}>
        <Image src={`/${type}.png`} alt='' width={16} height={16}/>
      </button>

      {open && (
        <div className="w-screen h-screen absolute inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[75%] lg:w-[65%] xl:w-[60%] overflow-y-auto max-h-[92%]">
             <Form/>
             <div className="absolute top-4 right-4 cursor-pointer" onClick={()=>setOpen(false)}>
                <Image src='/close.png' width={14} height={14} alt=''/>
            </div>
            </div>
            

        </div>
      )

      }
    </div>
  )
}

export default FormModal
