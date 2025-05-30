"use client"
import { useState } from 'react';
import Image from 'next/image';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];


const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white rounded-md p-4  '>
       <Calendar onChange={onChange} value={value} />

       <div className='flex justify-between items-center'>
        <p className='text-lg font-semibold my-2'>Events</p>
        <Image src='/moreDark.png' alt='' width={20} height={20}/>
       </div>

       <div className='flex flex-col gap-4'>
         {events.map(event=>(
            <div key={event.id} className='p-4 border-2 border-gray-100 rounded-md border-t-4 odd:border-t-andySky even:border-t-andyPurple'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-gray-800'>{event.title}</h1>
                    <span className='text-xs text-gray-400'>{event.time}</span>
                </div>
                <p className='mt-2 text-gray-500 text-sm'>{event.description}</p>

            </div>
         ))}
       </div>
    </div>
  )
}

export default EventCalendar
