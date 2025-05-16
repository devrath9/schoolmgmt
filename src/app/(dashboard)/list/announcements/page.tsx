import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, announcementsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Announcement={
id:number,
title:string,
class:string,
date:string,


}


const columns=[
    {
        header:"Title",
        accessor:"title",
    },
    
    {
      header:"Class",
      accessor:"class",
      className:"hidden md:table-cell" 
      
    },
    {
      header:"Date",
      accessor:"date", 
      
    },
    
    {
      header:"Actions",
      accessor:"action", 
      className:"hidden md:table-cell"
     
    },

]

const AnnouncementListPage = () => {

    const renderRow = (item:Announcement)=>(
   <tr key={item.id} className="border-b border-gray-300 even:bg-slate-100 text-sm hover:bg-andyPurpleLight">
    
    <td className="p-4">{item.title}</td>
    <td className="hidden md:table-cell">{item.class}</td>
    <td className="">{item.date}</td>
    
    
    <td className="hidden md:table-cell">
        <div className="flex items-center gap-2">

           {role === "admin" && (
            <>
              <FormModal table="announcement" type="update" data={item} />
              <FormModal table="announcement" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
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
               <FormModal table="announcement" type="create"  />
             )}
            </div>
           
        </div>
      </div>

        {/**--------TABLE------------ */}
      <div className="mt-8">
       <Table columns={columns} renderRow={renderRow} data={announcementsData}/>
      </div>

        {/**--------PAGINATION------------ */}
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default AnnouncementListPage
