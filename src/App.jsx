import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import Home from "./views/home";
import Contacto from "./views/contacto";
import Footer from "./components/Footer";
function App() {

  return (
    
    <BrowserRouter>
    <>
    <NavBar/>  

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>
    <Footer />
    </>
    </BrowserRouter>

  )
}

export default App