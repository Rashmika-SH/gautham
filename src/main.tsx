import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <GoogleAnalytics />
      <App />
    </HelmetProvider>
  </StrictMode>,
)
