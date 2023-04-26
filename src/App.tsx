import React from 'react'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'
import Status from './components/Status'

function App() {
  return (
    <Container>
      <section className='flex flex-col gap-1 max-w-lg w-full '>
        <Input />
        <div className='flex w-full gap-1'>
          <Status />
          <Button />
        </div>
      </section>
    </Container>
  )
}

export default App
