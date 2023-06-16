import { useState } from 'react'
import Home from './Pages/home/Home'
import { GlobalStyle } from './Global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <GlobalStyle/>
    </>
  )
}

export default App
