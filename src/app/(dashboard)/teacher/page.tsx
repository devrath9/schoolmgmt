import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"


const Teacherpage = () => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:min-h-screen p-4">

      {/*---------LEFT SIDE----------- */}
      <div className="w-full xl:w-2/3 ">

         <div className=" h-full rounded-md white p-4 bg-white">
            <h1 className="text-xl font-semibold max-sm:mb-5">Schedule</h1>

             {/* Responsive scroll wrapper */}
              <div className="w-full overflow-x-auto">
                <div className="min-w-[700px] h-[600px]"> {/* You can adjust min-width based on how much space calendar needs */}
                <BigCalendar />
               </div>
              </div>
         </div>

      </div>

      {/*---------RIGHT SIDE----------- */}
       <div className="w-full xl:w-1/3  ">
        
         <Announcements/>
      </div>
      
    </div>
  )
}

export default Teacherpage
