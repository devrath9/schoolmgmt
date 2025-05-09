import Image from "next/image"

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
         <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold my-2'>Announcements</h1>
            <span className="text-sm text-gray-400">View All</span>
        </div>

        <div className="mt-4 gap-4 flex flex-col">

            <div className="bg-andySky p-4 rounded-md">
              <div className='flex justify-between items-center'>
                <h1 className='text-lg font-medium '>Title</h1>
                 <span className="text-xs text-gray-600 bg-white px-1 py-1 rounded-md">2012-08-12</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore placeat odit omnis adipisci.</p>
            </div>

            <div className="bg-andyYellow p-4 rounded-md">
              <div className='flex justify-between items-center'>
                <h1 className='text-lg font-medium'>Title</h1>
                 <span className="text-xs text-gray-600 bg-white px-1 py-1 rounded-md">2012-08-12</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, eaque obcaecati. </p>
            </div>

            <div className="bg-andyPurple p-4 rounded-md">
              <div className='flex justify-between items-center'>
                <h1 className='text-lg font-medium'>Title</h1>
                 <span className="text-xs text-gray-600 bg-white px-1 py-1 rounded-md">2012-08-12</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi in aperiam, numquam tempore.</p>
            </div>

        </div>
      
    </div>
  )
}

export default Announcements
