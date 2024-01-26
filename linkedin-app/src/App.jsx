import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

//components
import NavbarL from './components/Navbar';
import UserProfile from "./components/UserProfile";
import Footer from './components/Footer';

function App() {
  return (
    
    <Router>
      <>
        <NavbarL />
        <Switch>
          
          <Route path="/profile/:userId" component={UserProfile} />
          
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
