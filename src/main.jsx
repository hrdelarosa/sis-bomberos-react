import './index.css'
import { createRoot } from 'react-dom/client'
import { DropdonwProvider } from './modules/core/context/header/DropdonwContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <DropdonwProvider>
    <App />
  </DropdonwProvider>
)
