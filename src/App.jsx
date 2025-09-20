import Home from './components/home'
import Shop from './components/shop'
import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'


import './App.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
     <Route path="/" element ={<> <Home/> <Shop/>  <About/> <Contact/></>}/> 
     <Route path="/shop" element={<Shop/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
</>
 )

 
}

export default App
