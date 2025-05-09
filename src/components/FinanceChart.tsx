"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
      name: 'Jan',
      income: 4000,
      expense: 2400,
      
    },
    {
      name: 'Feb',
      income: 3000,
      expense: 1398,
      
    },
    {
      name: 'Mar',
      income: 2000,
      expense: 9800,
      
    },
    {
      name: 'Apr',
      income: 2780,
      expense: 3908,
      
    },
    {
      name: 'May',
      income: 1890,
      expense: 4800,
      
    },
    {
      name: 'Jun',
      income: 2390,
      expense: 3800,
      
    },
    {
      name: 'Jul',
      income: 3490,
      expense: 4300,
      
    },
    {
        name: 'Aug',
        income: 2490,
        expense: 1400,
        
      },
      {
        name: 'Sep',
        income: 3690,
        expense: 3000,
        
      },
      {
        name: 'Oct',
        income: 4090,
        expense: 3200,
        
      },
      {
        name: 'Nov',
        income: 3490,
        expense: 4300,
        
      },
      {
        name: 'Dec',
        income: 3090,
        expense: 2300,
        
      },
  ];

const FinanceChart = () => {
  return (
    <div className='w-full h-full p-4 rounded-xl bg-white'>

         {/*---TITLE----- */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src='/moreDark.png' alt='' width={10} height={10}/>
            
            </div>

    <div className='w-full h-[90%]'>   
      <ResponsiveContainer >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false}  tickLine={false}/>
          <YAxis axisLine={false}  tickLine={false}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
      </div> 
    </div>
  )
}

export default FinanceChart
