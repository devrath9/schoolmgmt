"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Mon',
      present: 40,
      absent: 24,
      
    },
    {
      name: 'Tue',
      present: 30,
      absent: 13,
      
    },
    {
      name: 'Wed',
      present: 70,
      absent: 40,
      
    },
    {
      name: 'Thur',
      present: 65,
      absent: 55,
      
    },
    {
      name: 'Fri',
      present: 60,
      absent: 50,
      
    },
    
  ];
const AttendanceChart = () => {
  return (

<div className='bg-white w-full h-full rounded-xl p-4'>

    {/*---TITLE----- */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src='/moreDark.png' alt='' width={10} height={10}/>
    
            </div>

            

    <div className='w-full h-[90%]'>
     <ResponsiveContainer >
        <BarChart
          width={500}
          height={300}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />

          <XAxis dataKey="name" axisLine={false}  tickLine={false}/>
          <YAxis axisLine={false}  tickLine={false}/>
              
          <Tooltip contentStyle={{borderRadius:'10px', borderColor:'lightgray'}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar 
          dataKey="present" 
          fill="#FAE27C" 
           legendType='circle'
           radius={[10,10,0,0]}/>

          <Bar 
          dataKey="absent" 
          fill="#C3EBFA" 
          legendType='circle' 
          radius={[10,10,0,0]}/>

        </BarChart>
      </ResponsiveContainer> 
    </div>
    </div>
  )
}

export default AttendanceChart
