import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './views/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
