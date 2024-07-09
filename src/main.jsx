import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './components/Homepage.jsx'
import URLParser from './components/tools/web/URLParser.jsx'
import JWTParser from './components/tools/web/JWTParser.jsx'
import QRCodeGen from './components/tools/media/QRCode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="url-parser" element={<URLParser />} />
          <Route path='jwt-parser' element={<JWTParser />} />
          <Route path='qr-code' element={<QRCodeGen />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
