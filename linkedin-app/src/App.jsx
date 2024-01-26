import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import UserProfile from "./components/UserProfile";


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProfilePage />}/>
          
        <Route path="/profile/:userId" component={UserProfile} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default App;
