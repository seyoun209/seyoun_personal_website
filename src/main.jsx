import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import PersonalSite from './PersonalSite.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <PersonalSite />
    </HashRouter>
  </React.StrictMode>
)