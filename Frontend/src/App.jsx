import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LoginPage/>
    // <div className='text-4xl bg-red-500 text-white'>
    //   Hlo
    // </div>
  )
}

export default App
