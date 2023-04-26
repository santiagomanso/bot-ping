import React, { useContext } from 'react'
import { UrlContext } from '../context/UrlContext'

type Props = {}

const Status = (props: Props) => {
  const { active } = useContext(UrlContext)

  return (
    <div className='w-full text-center bg-transparent border-[2px] border-indigo-300 text-indigo-300 font-medium px-5 py-2 rounded-sm uppercase shadow-lg shadow-gray-900 tracking-wider flex gap-1 items-center justify-center transition-all ease-in-out duration-500'>
      <span>bot {active ? 'online' : 'offline'}</span>
      <i
        className={`fa-solid fa-bolt ${
          active ? 'opacity-100 text-yellow-400' : 'opacity-50'
        }`}
      ></i>
    </div>
  )
}

export default Status
