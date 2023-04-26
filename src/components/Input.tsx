import React, { useContext } from 'react'
import { UrlContext } from '../context/UrlContext'

const Input = () => {
  const { setUrl, url } = useContext(UrlContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  return (
    <input
      type='text'
      placeholder='Enter backend url'
      className='px-2 py-2 rounded-sm focus:outline-none bg-transparent border-[2px] border-indigo-300 text-indigo-300 font-medium placeholder-indigo-300 uppercase shadow-lg shadow-gray-900 w-full text-center'
      value={url}
      onChange={handleChange}
    />
  )
}

export default Input
