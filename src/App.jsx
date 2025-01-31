import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import useAuthStore from './modules/auth/store/auth'

import ProtectedRoute from './modules/ProtectedRoutes/ProtectedRoute'
import Login from './modules/auth/login/Login'
import Register from './modules/auth/register/Register'
import Dashboard from './modules/dashboard/Dashboard'
import Profile from './modules/profile/Profile'
import Services from './modules/servicios/Services'
import CreateService from './modules/servicios/CreateService'
import Personnel from './modules/personnel/Personnel'
import Units from './modules/units/Units'
import Types from './modules/units/Types'
import Guards from './modules/guards/Guards'
import Stations from './modules/stations/Stations'
import Roles from './modules/roles/Roles'
import Ranks from './modules/ranks/Ranks'
import Users from './modules/users/Users'
import GuardPersonal from './modules/guards/GuardPersonal'
import AddPerGuard from './modules/guards/AddPerGuard'
import Service from './modules/servicios/Service'

function App() {
  const { checkLogin } = useAuthStore()

  useEffect(() => {
    checkLogin()
  }, [checkLogin])

  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors visibleToasts={4} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/create" element={<CreateService />} />
          <Route path="/services/:id" element={<Service />} />
          {/* suport */}
          <Route path="/suport/stations" element={<Stations />} />
          {/* Personal */}
          <Route path="/suport/personnel" element={<Personnel />} />
          <Route path="/suport/guards" element={<Guards />} />
          <Route path="/suport/guards/:guard/:id" element={<GuardPersonal />} />
          <Route
            path="/suport/guards/add/:guard/:id/"
            element={<AddPerGuard />}
          />
          <Route path="/suport/ranks" element={<Ranks />} />
          {/* Roles */}
          <Route path="/suport/roles" element={<Roles />} />
          {/* Unidades */}
          <Route path="/suport/units" element={<Units />} />
          <Route path="/suport/units/types" element={<Types />} />
          {/* Usuarios */}
          <Route path="/suport/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
