
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { assets } from './assets/assets'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './pages/Home'


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
   </div>
     
     </>
  )
}

export default App
