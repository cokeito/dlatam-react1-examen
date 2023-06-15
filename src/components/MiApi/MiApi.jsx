import React, { useEffect, useState } from 'react'
import ChartItem from '../ChartItem/ChartItem'
import Header from '../Header/Header'

const MiApi = () => {
  const [billboardChart, setBillboardChart] = useState([])
  const [billboardDate, setBillboardDate] = useState([])

  const [defaultData, setDefaultData] = useState([])
  const [currentSort, setCurrentSort] = useState('up')

  const requestDataApi = async () => {
    const url = 'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-200/recent.json'
    const response = await fetch(url)
    const data = await response.json()
    setBillboardChart(data.data)
    setDefaultData(data.data)

    /* fecha del chart */
    const clDate = new Intl.DateTimeFormat("es-ES", {
      dateStyle: "full"
    }
    ).format(new Date(data.date));
    setBillboardDate(clDate)
  }

  useEffect(() => {
    requestDataApi()
  }, [])

  const searchFilter = (search) => {
    if (search.query.length === 0) {
      setBillboardChart(defaultData)
    } else {
      { /* filtros */ }
      const filteredName = defaultData.filter(item => item.name.toLowerCase().includes(search.query.toLowerCase()))
      const filteredArtist = defaultData.filter(item => item.artist.toLowerCase().includes(search.query.toLowerCase()))

      { /* genero nuevo array, saco los repertidos los ordeno */ }
      const result = [...new Set([...filteredName, ...filteredArtist])]
      setBillboardChart(result.sort((a, b) => a.rank - b.rank))
    }
  }

  const sort = (mode) => {
    if (mode == 'up') {
      setCurrentSort('up')
      setBillboardChart([...billboardChart.sort((a, b) => a.rank - b.rank)]);
    } else {
      setCurrentSort('down')
      setBillboardChart([...billboardChart.sort((a, b) => b.rank - a.rank)]);
    }
  }

  return (
    <>
      <Header searchFilter={searchFilter} billboardDate={billboardDate} />
      <div className="flex w-[800px] text-white bg-black text-center items-center py-2 font-bold text-[12px] uppercase">
        <div className="min-w-[120px] flex justify-center">
          <span className="mr-2">Ranking </span>
          <div className="w-[16px] cursor-pointer text-violet-700" onClick={(e) => { sort('up') }} >
            <svg fill={(currentSort == 'up') ? 'rgb(109 40 217)' : '#fff'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm7-13.414 5.707 5.707-1.414 1.414L12 10.414l-4.293 4.293-1.414-1.414L12 7.586z"></path></g></svg>
          </div>
          <div className="w-[16px] cursor-pointer" onClick={(e) => { sort('down') }} >
            <svg
              fill={(currentSort != 'up') ? 'rgb(109 40 217)' : '#fff'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"><g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round">
              </g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm7-13.414 5.707 5.707-1.414 1.414L12 10.414l-4.293 4.293-1.414-1.414L12 7.586z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="min-w-[180px]"></div>
        <div className="flex-grow"> Artista </div>
        <div className="min-w-[100px] text-center"> Semana <br />Anterior</div>
        <div className="min-w-[100px] text-center"> Mejor <br />Posición</div>
        <div className="min-w-[100px] text-center"> Semanas <br /> Ranking</div>
      </div >
      <div className="ranking">
        {
          billboardChart.map((item, index) => {
            return (
              <ChartItem key={index} item={item} />
            )
          })
        }
      </div>
    </>




  )
}

export default MiApi