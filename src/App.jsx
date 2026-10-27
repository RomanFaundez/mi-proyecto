import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { About } from './pages/about'
import './App.css'

function Home() {
  return <h1>Página de Inicio</h1>
}

function App() {
  return (
    <BrowserRouter>
      {/* Navegación entre páginas sin recargar el navegador */}
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
      </nav>

      {/* Definición de la relación URL -> Componente */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App