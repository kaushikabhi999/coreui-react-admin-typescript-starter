import React from 'react'
import { AppSidebar, AppFooter, AppHeader } from './index'
import AppRouter from 'src/navigation/AppRouter'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppRouter />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
