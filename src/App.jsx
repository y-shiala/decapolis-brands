import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import AboutUs from './Pages/AboutUs'
import Expertise from './Pages/Expertise'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/expertise' element={<Expertise />} />
        
      </Routes>

      <Footer />
      
      
    </div>
  )
}

export default App
