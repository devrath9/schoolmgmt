

const Pagination = () => {
  return (
    <div className="px-1 md:px-4 py-4 flex items-center justify-between text-gray-400">
        <button disabled className="bg-slate-200 px-4 py-2 rounded text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            Prev
            </button>

            {/**---------PAGE NUMBERS----------- */}
            <div className="flex gap-2 items-center">
                <button className="bg-andySky text-sm px-2 rounded-sm">1</button>
                <button className="text-sm px-2 rounded-sm">2</button>
                <button className="text-sm px-2 rounded-sm">3</button>
                ...
                <button className="text-sm px-2 rounded-sm">10</button>

            </div>
            
            <button className="bg-slate-200 px-4 py-2 rounded text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
             Next
            </button>
      
    </div>
  )
}

export default Pagination
