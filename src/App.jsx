import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import AboutUs from './Pages/AboutUs'
import Expertise from './Pages/Expertise'
import Header from './components/Header'
import Footer from './components/Footer'
import UxUi from './Pages/UxUi'
import WebApp from './Pages/WebApp'
import BrandingCustomization from './Pages/BrandingCustomization'
import GraphicDesign from './Pages/GraphicDesign'
import ContentCreation from './Pages/ContentCreation'
import DigitalMarketing from './Pages/DigitalMarketing'

const App = () => {
  return (
    <div className='overflow-x-hidden'>


      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/expertise' element={<Expertise />} />
        <Route path='/uiux' element={<UxUi />} />
        <Route path='/web-app' element={<WebApp />} />
        <Route path='/branding-customization' element={<BrandingCustomization />} />
        <Route path='/graphic-design' element={<GraphicDesign />} />
        <Route path='/content-creation' element={<ContentCreation />} />
        <Route path='/digital-marketing' element={<DigitalMarketing />} />

      </Routes>

      <Footer />


    </div>
  )
}

export default App
