import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Teacher={
id:number,
teacherId:string,
name:string,
email?:string,
photo:string,
phone:string,
subjects:string[],
classes:string[],
address:string

}

const columns=[
    {
        header:"Info",
        accessor:"info",
    },
    {
      header:"Teacher ID",
      accessor:"teacherId", 
      className:"hidden md:table-cell" 
    },
    {
      header:"Subjects",
      accessor:"subjects", 
      className:"hidden md:table-cell" 
    },
    {
      header:"Classes",
      accessor:"classes", 
      className:"hidden md:table-cell" 
    },
    {
      header:"Phone",
      accessor:"phone", 
      className:"hidden lg:table-cell" 
    },
    {
      header:"Address",
      accessor:"address", 
      className:"hidden xl:table-cell" 
    },
    {
      header:"Actions",
      accessor:"action", 
     
    },

]


const TeacherListPage = () => {

  const renderRow = (item:Teacher)=>(
   <tr key={item.id} className="border-b border-gray-300 even:bg-slate-100 text-sm hover:bg-andyPurpleLight">
    <td className="flex gap-2 items-center p-4">
        <Image src={item.photo} alt='' width={40} height={40} className="md:hidden lg:block w-10 h-10 rounded-full object-cover"/>
        <div className="flex flex-col">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="text-gray-400 text-xs">{item?.email}</p>
        </div>
    </td>
    <td className="hidden md:table-cell">{item.teacherId}</td>
    <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
    <td className="hidden md:table-cell">{item.classes.join(",")}</td>
    <td className="hidden lg:table-cell">{item.phone}</td>
    <td className="hidden xl:table-cell">{item.address}</td>
    
    <td>
        <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-andySky">
                <Image src='/view.png' alt='' width={16} height={16}/>
            </button>
            </Link>

             {role==='admin' && (
                  <FormModal table="teacher" type="delete" id={item.id}/>
                )}

        </div>
    </td>
   
   </tr>
  )

  return (
    <div className="p-4 bg-white rounded-md m-4 mt-0 flex-1">
       {/**--------TOP------------ */} 
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row gap-2 items-center w-full md:w-auto">
            <TableSearch/>
            <div className="flex gap-4 items-center self-end ">
             <button className="bg-andyYellow flex items-center justify-center rounded-full w-7 h-7 ">
               <Image src='/filter.png' alt='' width={14} height={14}/>
             </button>
             <button className="bg-andyYellow flex items-center justify-center rounded-full w-7 h-7 ">
               <Image src='/sort.png' alt='' width={14} height={14}/>
             </button>
             {role==='admin' && (
             <FormModal table="teacher" type="create"/>)}
            </div>
           
        </div>
      </div>

        {/**--------TABLE------------ */}
      <div className="mt-8">
       <Table columns={columns} renderRow={renderRow} data={teachersData}/>
      </div>

        {/**--------PAGINATION------------ */}
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default TeacherListPage
