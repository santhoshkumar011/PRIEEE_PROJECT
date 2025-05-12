import './index.css'
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import LanderPage from './pages/LanderPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<LanderPage />} />
        <Route path='/:uname' element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
