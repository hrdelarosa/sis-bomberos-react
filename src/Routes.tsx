import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './layouts/Layout'

import Dashboard from './modules/dashboard/pages/Dashboard'
import Units from './modules/units/pages/Units'
import Types from './modules/units/pages/Types'
import Personnel from './modules/personnel/pages/Personnel'
import Ranks from './modules/personnel/pages/Ranks'
import Stations from './modules/stations/pages/Stations'
import Guards from './modules/stations/pages/Guards'
import Users from './modules/users/pages/Users'
import Roles from './modules/roles/pages/Roles'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/types" element={<Types />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/personnel/ranks" element={<Ranks />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/stations/guards" element={<Guards />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
