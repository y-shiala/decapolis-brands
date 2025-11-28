import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import AboutUs from './Pages/AboutUs'
const App = () => {
  return (
    <div className='overflow-x-hidden'>

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about-us' element={<AboutUs />} />
        
      </Routes>
      
      
    </div>
  )
}

export default App
