import React, { useContext } from 'react'
import { UrlContext } from '../context/UrlContext'

type Props = {}

const Button = (props: Props) => {
  const { pingBackend, active } = useContext(UrlContext)
  return (
    <button
      onClick={pingBackend}
      className='w-full px-5 py-2 rounded-sm  uppercase shadow-lg shadow-gray-900 active:translate-y-1 tracking-wider bg-transparent border-[2px] border-indigo-300 text-indigo-300 font-medium placeholder-indigo-300 text-center relative'
    >
      {active ? 'ping initiated' : 'initiate ping'}
      {active && (
        <span className='absolute -top-2 text-xs -right-3 w-6 h-10 text-white bg-red-600 rounded-full'>
          01
        </span>
      )}
    </button>
  )
}

export default Button
