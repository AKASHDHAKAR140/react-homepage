import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar'
import Footer from './component/Footer'

import Nav from './component/Nav';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Navbar/>
    <Routes>
     
    <Route path="/" element={<Home/>}/>
    
    

    
    </Routes>
    <Footer/>
    </BrowserRouter>
    );
}

export default App;
