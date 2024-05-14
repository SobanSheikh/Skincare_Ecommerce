import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Crud from './Crud.jsx'
import './index.css'
import New_App from './New_App.jsx'
import { CartProvider } from './components/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
    {/* <New_App /> */}
    {/* <Crud /> */}
    {/* <Cart /> */}
  </React.StrictMode>,
)
