import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, subjectsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Subject={
id:number,
name:string,
teachers:string[]
}

const columns=[
    {
        header:"Subject Name",
        accessor:"name",
    },
    {
        header:"Teachers",
        accessor:"teachers",
        className:"hidden md:table-cell"
    },
    
    {
      header:"Actions",
      accessor:"action", 
     
    },

]

const SubjectListPage = () => {

    const renderRow = (item:Subject)=>(
       <tr key={item.id} className=" border-b border-gray-300 even:bg-slate-100 text-sm hover:bg-andyPurpleLight">
        <td className="p-4">{item.name}</td>
        <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
        
        
        <td>
            <div className="flex items-center gap-2">
                {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
    
            </div>
        </td>
       
       </tr>
      )


  return (
   <div className="p-4 bg-white rounded-md m-4 mt-0 flex-1">
       {/**--------TOP------------ */} 
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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
               <FormModal table="subject" type="create"  />
             )}
            </div>
           
        </div>
      </div>

        {/**--------TABLE------------ */}
      <div className="mt-8">
       <Table columns={columns} renderRow={renderRow} data={subjectsData}/>
      </div>

        {/**--------PAGINATION------------ */}
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default SubjectListPage
