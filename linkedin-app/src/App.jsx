import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import MainProfile from './components/MainProfile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
