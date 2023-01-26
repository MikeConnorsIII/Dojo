// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Teams from './components/Teams';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar className="nav-bar"></Navbar>
      <Routes>
        <Route Path="/" element={<h1>Welcome to our Website!</h1>}></Route>
        <Route Path="/aboutus" element={<AboutUs/>}></Route>
        <Route Path="/contact" element={<Contact></Contact>}> </Route>
        <Route Path="/teams" element={<Teams/>}></Route>
        <Route Path="/teams/:city" element={<Teams/>}></Route>
        <Route Path="/teams/:city/color" element={<Teams/>}></Route>
        {/*                    ^path variable */}
      </Routes>

    </div>
  );
}

export default App;
