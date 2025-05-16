import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, parentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Parent={
id:number,
name:string,
email?:string,
students:string[],
phone:string,
address:string

}

const columns=[
    {
        header:"Info",
        accessor:"info",
    },
    {
      header:"Student Names",
      accessor:"students", 
      className:"hidden md:table-cell" 
    },
   
    {
      header:"Phone",
      accessor:"phone", 
      className:"hidden md:table-cell" 
    },
    {
      header:"Address",
      accessor:"address", 
      className:"hidden lg:table-cell" 
    },
    {
      header:"Actions",
      accessor:"action", 
     
    },

]

const ParentListPage = () => {

    const renderRow = (item:Parent)=>(
       <tr key={item.id} className="border-b border-gray-300 even:bg-slate-100 text-sm hover:bg-andyPurpleLight">
        
        <td className="flex flex-col p-4">
            <h1 className="font-semibold">{item.name}</h1>
            <p className="text-gray-400 text-xs">{item?.email}</p>
        </td>
        
        <td className="hidden md:table-cell">{item.students.join(",")}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden lg:table-cell">{item.address}</td>
        
        <td>
            <div className="flex items-center gap-2">
               {role === "admin" && (
            <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
               <FormModal table="parent" type="create"  />
             )}
            </div>
           
        </div>
      </div>

        {/**--------TABLE------------ */}
      <div className="mt-8">
       <Table columns={columns} renderRow={renderRow} data={parentsData}/>
      </div>

        {/**--------PAGINATION------------ */}
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default ParentListPage
