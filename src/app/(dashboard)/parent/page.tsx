import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"



const Parentpage = () => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row  p-4">

      {/*---------LEFT SIDE----------- */}
      <div className="w-full xl:w-2/3 ">

         <div className=" h-full rounded-md white p-4 bg-white">
            <h1 className="text-xl font-semibold max-sm:mb-5">Schedule</h1>

             {/* Responsive scroll wrapper */}
              <div className=" overflow-x-auto ">
                <div className="min-w-[700px] h-[600px] xl:h-full"> {/* You can adjust min-width based on how much space calendar needs */}
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

export default Parentpage
