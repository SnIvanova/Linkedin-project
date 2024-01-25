
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProfilePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
