import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './Cart.jsx'
import Crud from './Crud.jsx'
import './index.css'
import New_App from './New_App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <New_App /> */}
    <Crud />
    {/* <Cart /> */}
  </React.StrictMode>,
)
