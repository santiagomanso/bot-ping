import React from 'react'

interface contianerProps {
  children: React.ReactNode
}

const Container = ({ children }: contianerProps) => {
  return (
    <main className='bg-gradient-to-br from-slate-700 to-slate-800 h-screen flex items-center justify-center text-white'>
      {children}
    </main>
  )
}

export default Container
