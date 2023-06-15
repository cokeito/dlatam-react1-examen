import React, { useEffect, useState } from 'react'

const Header = ({ searchFilter, billboardDate }) => {
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    searchFilter({
      query: filterString
    })
  }, [filterString])


  return (
    <>
      <div className="flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[60px] pb-2"
          viewBox="0 0 455.133 94.711">
          <path fill="#fff" d="M70.107 28.859h21.318V93.69H70.107zM95.834 3.51h21.312v90.18H95.834zm25.723 0h21.312v90.18h-21.312zm250.711 32.035v-6.686h-21.315V93.69h21.315V62.792c0-7.949 4.154-12.237 11.728-12.237h2.522V28.229c-6.432.253-11.1 2.271-14.25 7.316zM80.764 0c-6.822 0-12.359 5.535-12.359 12.361 0 6.826 5.537 12.363 12.359 12.363 6.828 0 12.361-5.537 12.361-12.363S87.592 0 80.764 0zm244.457 33.795c-2.996-3.268-9.967-5.965-15.26-5.965-16.098 0-27.646 10.613-30.473 26.389-3.082-15.135-16.273-26.78-32.359-26.78-16.24 0-29.537 11.781-32.444 27.2-2.822-16.026-15.428-26.648-31.061-26.648-5.801 0-10.596 1.262-14.76 4.16V3.521h-21.312V93.7h20.938v-5.93c5.045 4.668 10.467 6.812 17.154 6.812 14.398 0 26.52-11.271 29.113-26.807 3.055 15.203 16.169 26.76 32.373 26.76 16.065 0 28.949-11.312 32.228-26.125 2.711 16.18 15.531 26.301 30.854 26.301 5.293 0 11.099-1.771 15.009-4.668V93.7h21.312V65.327c0-1.164-.008-2.298-.031-3.406.023-1.108.031-2.241.031-3.405V28.969h-21.312v4.826zM181.355 73.948c-6.826 0-12.359-5.535-12.359-12.363 0-6.824 5.533-12.358 12.359-12.358 6.824 0 12.359 5.534 12.359 12.358.001 6.828-5.534 12.363-12.359 12.363zm65.774-.99c-6.822 0-12.361-5.539-12.361-12.363 0-6.823 5.539-12.358 12.361-12.358 6.824 0 12.359 5.535 12.359 12.358.001 6.823-5.532 12.363-12.359 12.363zm64.047.392c-6.826 0-12.354-5.539-12.354-12.363 0-6.823 5.527-12.358 12.354-12.358 6.832 0 12.359 5.535 12.359 12.358.001 6.824-5.527 12.363-12.359 12.363zM433.815 3.5v28.631c-4.156-2.9-8.949-4.16-14.757-4.16-17.782 0-31.654 13.746-31.654 33.55 0 18.664 13.368 33.043 29.642 33.043 6.68 0 12.103-2.146 17.152-6.811v5.928h20.938V3.5h-21.321zm-12.553 70.288c-6.817 0-12.354-5.539-12.354-12.358 0-6.828 5.535-12.365 12.354-12.365 6.828 0 12.363 5.537 12.363 12.365 0 6.819-5.535 12.358-12.363 12.358zM36.072 27.99c-5.803 0-10.594 1.262-14.76 4.16V3.521H0V93.7h20.936v-5.93c5.045 4.668 10.469 6.812 17.156 6.812 16.268 0 29.637-14.383 29.637-33.047 0-19.797-13.874-33.545-31.657-33.545zm-2.269 45.958c-6.824 0-12.359-5.535-12.359-12.363 0-6.824 5.535-12.358 12.359-12.358 6.826 0 12.359 5.534 12.359 12.358 0 6.828-5.533 12.363-12.359 12.363z"></path></svg>

        <div className="flex items-center justify-center  bg-gray-800">

          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </span>
            <input
              type="search"
              name="busqueda"
              className="w-[300px] py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Filtrar por Artista / Canción ..."
              onChange={(e) => setFilterString(e.target.value)}
              value={filterString}
            />
          </div>

        </div>

      </div>
      <div className="text-gray-200 pb-3"> Billboard Top 200 al <small> {billboardDate} </small></div>
    </>
  )
}

export default Header