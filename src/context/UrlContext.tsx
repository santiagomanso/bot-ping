import axios from 'axios'
import { createContext, useState } from 'react'

interface UrlContextI {
  url: string
  active: boolean
  setActive: (bol: boolean) => void
  setUrl: (url: string) => void
  pingBackend: () => void
}

interface providerI {
  children: React.ReactNode
}

const initialContext: UrlContextI = {
  url: '',
  active: false,
  setActive: () => console.log('not initialized'),
  setUrl: () => console.log('not initialized'),
  pingBackend: () => console.log('not initialized'),
}

export const UrlContext = createContext<UrlContextI>(initialContext)

export const UrlContextProvider = ({ children }: providerI) => {
  const [url, setUrl] = useState('')
  const [active, setActive] = useState(false)

  const pingBackend = async () => {
    if (!active) {
      try {
        setActive(true)
        const response = await axios.get(url)
        console.log('Ping succeeded!', response)
      } catch (error) {
        console.error('Ping failed:', error)
        setActive(false)
      }
    } else {
      setActive(false)
    }
  }

  const data = {
    url,
    active,
    setActive,
    setUrl,
    pingBackend,
  }

  return <UrlContext.Provider value={data}>{children}</UrlContext.Provider>
}
