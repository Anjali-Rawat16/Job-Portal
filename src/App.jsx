import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import Login from "./pages/Login"

import './App.css'
import Register from "./components/Register"
import Employers from "./pages/Employers"
import Admin from "./pages/Admin"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  
  return (
    <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="/jobs" element = {<Jobs/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/employers" element={<Employers/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  </Routes> 
  </BrowserRouter>
  </div>
  )
}

export default App;

