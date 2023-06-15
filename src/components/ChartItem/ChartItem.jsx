import React from 'react'
import ChartItemIcon from '../ChartItemIcon/ChartItemIcon'

const ChartItem = ({ item }) => {

  const image_width = (item.rank === 1) ? 'w-[180px]' : (item.rank === 2) ? 'w-[150px]' : 'w-[100px]'
  const font_size = (item.rank === 1) ? 'text-2xl' : (item.rank === 2) ? 'text-xl' : 'text-lg'

  return (
    <ul className='flex w-[800px] text-white  border-gray-700 items-center my-[2px]' >
      <li className='min-w-[120px] bg-gray-900 flex justify-center items-center self-stretch'>
        <span className={`font-extrabold ${font_size}`}>
          {item.rank}
        </span>
      </li>
      <li className="flex relative min-w-[100px]">
        <img src={item.image} alt={item.name} className={image_width} />
        <div className="h-[20px] w-[20px] absolute bottom-2 right-1 ">
          <ChartItemIcon last_week_rank={item?.last_week_rank} rank={item?.rank} />
        </div>

      </li>
      <li className="flex-grow">
        <div className={`font-extrabold ${font_size} pl-4`}>
          {item.name}
        </div>
        <div>
          <span className="pl-4 text-violet-500">
            {item.artist}
          </span>
        </div>
      </li>
      <li className="min-w-[100px] text-center"> {item.last_week_rank} </li>
      <li className="min-w-[100px] text-center"> {item.peak_rank} </li>
      <li className="min-w-[100px] text-center"> {item.weeks_on_chart} </li>

    </ul>

  )
}

export default ChartItem