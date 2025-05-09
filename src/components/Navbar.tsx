import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">

      {/*--------SEARCH BAR--------- */}
      <div className="hidden md:flex items-center gap-2  px-2 border border-gray-300 shadow-md rounded-full text-sm bg-white">
       <Image src='/search.png' alt='' width={14} height={14}/>
       <input type='text' placeholder="Search..." className="w-[200px] p-1.5  bg-transparent outline-none"/>
      </div>

      {/*-----ICONS & USER------------ */}
      <div className="flex items-center gap-6 w-full justify-end">

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
        <Image src='/message.png' alt='' width={20} height={20}/>
        </div>
        
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
        <Image src='/announcement.png' alt='' width={20} height={20}/>
        <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white text-xs rounded-full bg-purple-500 ">1</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src='/avatar.png' alt='' width={36} height={36} className="rounded-full"/>

      </div>
      
    </div>
  )
}

export default Navbar
