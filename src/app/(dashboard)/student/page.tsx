import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const Studentpage = () => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row p-4 ">
  {/* LEFT SIDE */}
  <div className="w-full xl:w-2/3 flex flex-col">
    <div className="flex flex-col flex-1 bg-white rounded-md p-4">
      <h1 className="text-xl font-semibold max-sm:mb-5">Schedule 4A</h1>

      {/* Responsive wrapper */}
      <div className="mt-4 flex-1 overflow-auto">
        <div className="min-w-[700px] h-[600px] xl:h-full">
          <BigCalendar />
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full xl:w-1/3 flex flex-col gap-8">
    <EventCalendar />
    <Announcements />
  </div>
</div>
  )
}

export default Studentpage
