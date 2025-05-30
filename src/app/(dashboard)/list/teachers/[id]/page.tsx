import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModal from "@/components/FormModal"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"


const SingleTeacherpage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 xl:flex-row">

        {/*----------LEFT---------------- */}
        <div className="w-full xl:w-2/3">

           {/*----------TOP---------------- */}
           <div className="flex flex-col lg:flex-row gap-4">

                {/*----------TAECHERINFO CARD---------------- */}
                <div className="flex-1 bg-andySky px-4 py-6 rounded-md flex gap-4">
                    <div className="w-1/3">
                     <Image src='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb'
                       alt=''
                       width={144}
                       height={144}
                       className="w-36 h-36 rounded-full object-cover"
                     />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4 ">

                    <div className="flex itmes-center gap-4">
                         <h1 className="text-xl font-semibold">DEAN GUERRERO</h1>
                     <FormModal table="teacher" type="update"  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }} />
                    </div>
                     
                     <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere?</p>
                     <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                            <Image src='/blood.png' width={14} height={14} alt=''/>
                            <span>A+</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                            <Image src='/date.png' width={14} height={14} alt=''/>
                            <span>January 2025</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                            <Image src='/mail.png' width={14} height={14} alt=''/>
                            <span>abcde@gmail.com</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                            <Image src='/phone.png' width={14} height={14} alt=''/>
                            <span>123456789</span>
                        </div>

                     </div>
                    </div>

                </div>

                {/*----------OTHER CARDS---------------- */}
                <div className="flex-1 flex flex-col md:grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-300 shadow-md rounded-lg flex flex-row gap-2 items-center justify-center max-lg:py-2">
                        <Image src='/singleAttendance.png' width={24} height={24} alt='' className="w-6 h-6 "/>
                        <div>
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-500">Attendance</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-300 shadow-md rounded-lg flex flex-row gap-2 items-center justify-center max-lg:py-2">
                        <Image src='/singleBranch.png' width={24} height={24} alt='' className="w-6 h-6 "/>
                        <div>
                            <h1 className="text-xl font-semibold">2</h1>
                            <span className="text-sm text-gray-500">Branches</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-300 shadow-md rounded-lg flex flex-row gap-2 items-center justify-center max-lg:py-2">
                        <Image src='/singleLesson.png' width={24} height={24} alt='' className="w-6 h-6 "/>
                        <div>
                            <h1 className="text-xl font-semibold">6</h1>
                            <span className="text-sm text-gray-500">Lessons</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-300 shadow-md rounded-lg flex flex-row gap-2 items-center justify-center max-lg:py-2">
                        <Image src='/singleClass.png' width={24} height={24} alt='' className="w-6 h-6 "/>
                        <div>
                            <h1 className="text-xl font-semibold">6</h1>
                            <span className="text-sm text-gray-500">Classes</span>
                        </div>
                    </div>

                </div>

           </div>


            {/*----------BOTTOM---------------- */}
           <div className="mt-4 p-4 bg-white rounded-md h-[800px]">
            <h1>Teacher's Schedule</h1>
            <BigCalendar/>

           </div>

        </div>


         {/*----------RIGHT---------------- */}
        <div className="w-full xl:w-1/3 flex flex-col gap-3 ">

        <div className="bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">Shortcuts</h1>
            <div className="mt-4  flex flex-wrap items-center gap-4 text-xs">
                <Link className='px-2 py-1 rounded-md bg-andyPurple'href='/'>Teacher's Classes</Link>
                <Link className='px-2 py-1 rounded-md bg-andyYellow'href='/'>Teacher's Students</Link>
                <Link className='px-2 py-1 rounded-md bg-andySky'href='/'>Teacher's Lessons</Link>
                <Link className='px-2 py-1 rounded-md bg-pink-100'href='/'>Teacher's Exams</Link>
                <Link className='px-2 py-1 rounded-md bg-red-100'href='/'>Teacher's Assignments</Link>

            </div>

        </div>

        <Performance/>

        <Announcements/>

        </div>
      
    </div>
  )
}

export default SingleTeacherpage
