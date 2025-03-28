import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './layouts/Layout'

import Dashboard from './modules/dashboard/pages/Dashboard'
import Units from './modules/units/pages/Units'
import Types from './modules/units/pages/Types'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/types" element={<Types />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
