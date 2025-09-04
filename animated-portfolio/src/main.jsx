import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import LoadingAnimation from './components/common/loadingAnimation.jsx'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LoadingAnimation />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
