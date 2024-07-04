import { useState } from 'react'
import { Button } from 'primereact/button'
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import DetailsProduct from './components/DetailsProduct'
import Cart from './components/Cart'
function App() {
  const [cart, setCart] = useState(false)

  return (
    <>
      <Routes>
        <Route path="detalles-producto/:idProduct" element={<DetailsProduct />} />
        <Route path="carrito" element={<Cart />} />
      </Routes>
      <Link to='detalles-producto/10'>Ir al producto</Link>
      {/* <DetailsProduct />
      {cart && (
        <Cart />
      )} */}
      {/* <Button label='Ver Carrito' onClick={() => setCart(!cart)} /> */}
    </>
  )
}

export default App
