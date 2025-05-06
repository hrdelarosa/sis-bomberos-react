import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import authStore from '../modules/auth/states/authStore'

import Layout from '../layouts/Layout'
import AuthLayout from '../layouts/AuthLayout'
import ProtectedRoute from './ProtectedRoute'
import AdminRoute from './AdminRoute'

import Login from '../modules/auth/page/Login'
import Register from '../modules/auth/page/Register'
import Verify from '../modules/auth/page/Verify'
import RequestPassword from '../modules/auth/page/RequestPassword'
import ResetPassword from '../modules/auth/page/ResetPassword'

import Dashboard from '../modules/dashboard/pages/Dashboard'
import Profile from '../modules/profile/pages/Profile'

import Services from '../modules/services/page/Services'
import CreateService from '../modules/services/page/CreateService'
import Service from '../modules/services/page/Service'

import Units from '../modules/units/pages/Units'
import Types from '../modules/units/pages/Types'

import Personnel from '../modules/personnel/pages/Personnel'
import Ranks from '../modules/personnel/pages/Ranks'
import PersonnelBy from '../modules/personnel/pages/PersonnelBy'

import Stations from '../modules/stations/pages/Stations'
import Guards from '../modules/stations/pages/Guards'
import GuardsByStation from '../modules/stations/pages/GuardByStation'

import Users from '../modules/users/pages/Users'
import Roles from '../modules/roles/pages/Roles'

export default function AppRoutes() {
  const { verifyToken } = authStore()

  useEffect(() => {
    const checkLogin = async () => verifyToken()

    checkLogin()
  }, [verifyToken])

  return (
    // <BrowserRouter>
    <BrowserRouter basename="/incidenciasbomberos">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<Verify />} />
          <Route path="/request-reset-password" element={<RequestPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/services/create" element={<CreateService />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<Service />} />

            <Route path="/units" element={<Units />} />
            <Route path="/units/types" element={<Types />} />

            <Route path="/personnel" element={<Personnel />} />
            <Route path="/personnel/ranks" element={<Ranks />} />
            <Route path="/personnel/:filter/:id" element={<PersonnelBy />} />

            <Route path="/stations" element={<Stations />} />
            <Route path="/stations/guards" element={<Guards />} />
            <Route path="/stations/guards/:id" element={<GuardsByStation />} />
          </Route>
        </Route>

        <Route element={<AdminRoute />}>
          <Route element={<Layout />}>
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
