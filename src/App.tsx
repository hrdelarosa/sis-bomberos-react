import AppRoutes from './routes/Routes'
import { Toaster } from 'sonner'
import './App.css'

function App() {
  return (
    <>
      <Toaster position="top-right" richColors closeButton visibleToasts={6} />
      <AppRoutes />
    </>
  )
}

export default App
