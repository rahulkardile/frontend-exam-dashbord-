import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position='bottom-center' />
    </BrowserRouter>
  </React.StrictMode>,
)
