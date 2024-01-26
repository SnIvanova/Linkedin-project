import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
