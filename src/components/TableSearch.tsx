import Image from "next/image"


const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2  px-2 ring-[1.5px] ring-gray-300 rounded-full text-sm bg-white">
        <Image src='/search.png' alt='' width={14} height={14}/>
        <input type='text' placeholder="Search table..." className="w-[200px] p-1.5  bg-transparent outline-none"/>
    </div>
  )
}

export default TableSearch
