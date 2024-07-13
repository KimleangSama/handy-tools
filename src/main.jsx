import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './components/Homepage.jsx'
import URLParser from './components/tools/web/URLParser.jsx'
import JWTParser from './components/tools/web/JWTParser.jsx'
import QRCodeGen from './components/tools/media/QRCode.jsx'
import Slugify from './components/tools/web/Slugify.jsx'
import ColorConverter from './components/tools/media/ColorConverter.jsx'
import Base64EnDeCode from './components/tools/web/Base64EnDeCode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="url-parser" element={<URLParser />} />
          <Route path='jwt-parser' element={<JWTParser />} />
          <Route path='slugify' element={<Slugify />} />
          <Route path='base64-encode-decode' element={<Base64EnDeCode />} />
          <Route path='qr-code' element={<QRCodeGen />} />
          <Route path='color-converter' element={<ColorConverter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
