import React from 'react'
import { Outlet } from 'react-router-dom'
import AdmineSidebar from './admincomponents/AdmineSidebar'
import AdmineNavbar from './admincomponents/AdmineNavbar'

export default function AdmineLayout() {

  return (
    <>
      <AdmineSidebar />
      <AdmineNavbar />

      <div className="md:pl-64 min-h-screen">
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </>
  )
}
