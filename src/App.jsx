
import './App.css'
import "./css/footer.less"

import Layout from "./components/Layout"
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Destinos from './pages/Destinos'
import Gastronomia from './pages/Gastronomia'
import Relax from './pages/Relax'
import Videos from './pages/Videos'
import SobreMi from './pages/SobreMi'
import AOS from "aos";
import { useEffect } from 'react'



function App() {
 
  


  return (
    <Router>
      <Layout>
          <Routes>
                <Route   path='/'  element={<Inicio/>}/>
                <Route   path='/home/Destinos'  element={<Destinos/>}/>
                <Route   path='/home/Gastronomia'  element={<Gastronomia/>}/>
                <Route   path='/home/Relax'  element={<Relax/>}/>
                <Route   path='/home/Videos'  element={<Videos/>}/>
                <Route   path='/home/SobreMi'  element={<SobreMi/>}/>
          </Routes>
      </Layout>
    </Router>
     
 

  )
}

export default App
