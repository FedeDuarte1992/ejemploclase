
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './componentes/footer/Footer'
import Header from './componentes/header/Header'
import Menu from './componentes/menu/Menu'
import Seccion from './componentes/seccion/Seccion'
import ListaCasas from './componentes/casas/ListaCasas'
import ListaPersonajes from './componentes/personajes/ListaPersonajes'
import DetallesPersonaje from './componentes/personajes/DetallesPersonaje'


function App() {

  return (
    <div className='contenedor'>
    <Router>
        <Header/>
        <Menu/>
        <Routes>
        <Route path="/" element={<Seccion />} />
        <Route path="/casas" element={<ListaCasas />} />
        <Route path="/personajes" element={<ListaPersonajes />} />
        <Route path="/Detallespersonaje/:id" element={<DetallesPersonaje />} />
        </Routes>
        <Footer/>
    
    </Router></div>
  )
}

export default App;
