
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { assets } from './assets/assets'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import AllRooom from './pages/AllRooom'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'



function App() {
 const ownerPath = useLocation().pathname.includes('owner')

  return (
    <>
    <div>
   {!ownerPath &&  <Navbar/>}

   <div className='min-h-[70vh]'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='rooms' element={<AllRooom/>}/>
      <Route path='/rooms/:id' element={<RoomDetails/>}/>
      <Route path='/mybookings' element={<MyBookings/>}/>
    </Routes>
   </div>
   {!ownerPath &&  <Footer/>}
   </div>
     
     </>
  )
}

export default App
