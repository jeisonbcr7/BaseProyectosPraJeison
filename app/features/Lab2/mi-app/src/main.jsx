import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginLayout from './components/login/loginLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginLayout />
  </StrictMode>,
)
