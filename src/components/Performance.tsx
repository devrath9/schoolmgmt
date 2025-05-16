"use client"

import Image from 'next/image';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const data = [
  { name: "Group A", value: 92,fill:"#C3EBFA" },
  { name: "Group B", value: 8,fill:"#FAE27C" },
 
];

const Performance = () => {
  return (
    <div className='bg-white border border-gray-300 shadow-md rounded-md p-4 h-60 relative'>

         {/*---TITLE----- */}
         <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Performance</h1>
             <Image src='/moreDark.png' alt='' width={10} height={10}/>
        
        </div>
     
     <ResponsiveContainer width="100%" height="100%">
        <PieChart >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            fill="#8884d8"
           
          />
        </PieChart>
      </ResponsiveContainer>

       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-2xl font-bold'>9.2</h1>
        <p className='text-xs text-gray-500'>out of 10 ATS</p>
       </div>

       <h2 className='font-medium absolute bottom-12 right-0 left-0 text-center'>1st Semester-2nd Semester</h2>

    </div>
  )
}

export default Performance
