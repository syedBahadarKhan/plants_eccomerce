import Home from './components/home'
import Shop from './components/shop'
import './App.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
 return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element ={<> <Home/> <Shop/>  </>}/> 
     <Route path="/shop" element={<Shop/>}/>
     </Routes>
     </BrowserRouter>
</>
 )

 
}

export default App
