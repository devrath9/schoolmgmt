import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const Adminpage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">

      {/*------LEFT---------- */}
      <div className="w-full md:w-2/3 flex flex-col gap-8 ">

      <div className="flex flex-wrap gap-2">
       <UserCard type="student"/>
       <UserCard type="teacher"/>
       <UserCard type="parent"/>
       <UserCard type="staff"/>
       </div>


       {/*---MIDDLE CHARTS----- */}
       <div className="flex flex-col lg:flex-row gap-4">

           {/*---Count Chart------ */}
           <div className="w-full lg:w-1/3 h-[450px]">
             <CountChart/>
            </div>

            {/*---Attendance Chart------ */}
           <div className="w-full lg:w-2/3 h-[450px]">
              <AttendanceChart/>
            </div>

         </div>

      {/*---BOTTOM CHART----- */}
      
       <div className="overflow-x-auto">
         <div className="min-w-[750px] h-[500px]">
           <FinanceChart/>
           
         </div>
         </div>
         

        </div>

       

      

      {/*------RIGHT---------- */}
      <div className="w-full md:w-1/3 flex flex-col gap-8  ">
         <EventCalendar/>
         <Announcements/>
      </div>
      
    </div>
  )
}

export default Adminpage
