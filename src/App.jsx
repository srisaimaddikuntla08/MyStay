
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { assets } from './assets/assets'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Footer from './components/Footer'




function App() {

 const ownerPath = useLocation().pathname.includes('owner')
  return (
    <>
    <div>
   {!ownerPath &&  <Navbar/>}
   <div className='min-h-[70vh]'>
    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>
   </div>
   <Footer/>
   </div>
     
     </>
  )
}

export default App
