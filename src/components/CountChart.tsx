"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [

    {
      name: 'Total',
      count:110,
      fill: 'white',
    },
    {
      name: 'Girls',
      count: 55,
      fill: '#FAE27C',
    },
    {
      name: 'Boys',
      count: 55,
      fill: '#C3EBFA',
    },
    
  ];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>

        {/*---TITLE----- */}
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src='/moreDark.png' alt='' width={10} height={10}/>

        </div>


        {/*-------CHART----- */}
        <div className='w-full h-[75%] relative'>
          <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
               background
               dataKey="count"
             />
          
         </RadialBarChart>
      </ResponsiveContainer>
      <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
       src='/malefemale.png' alt='' width={50} height={50}/>


        </div>

        {/*--------BOTTOM----- */}
        <div className='flex justify-center gap-16'>
          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-andySky rounded-full'/>
            <h1 className='font-bold '>1,234</h1>
            <h2 className='text-xs text-gray-400'>Boys(55%)</h2>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-andyYellow rounded-full'/>
            <h1 className='font-bold '>1,234</h1>
            <h2 className='text-xs text-gray-400'>Girls(45%)</h2>
          </div>

        </div>
      
    </div>
  )
}

export default CountChart
   