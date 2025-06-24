import React from 'react'
import Header from '../components/Header.jsx'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div className="bg-zinc-100 min-h-screen">
        <div className="p-6">
            <Header />
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout
