import React from 'react'
import { Route, Routes } from 'react-router-dom'

// routes config
import DefaultLayout from '../modules/layoutModule/components/DefaultLayout'
import useAuthValue from '../modules/authModule/Hooks/useAuthValue'
// Containers

// Pages
const Login = React.lazy(() => import('../views/pages/login/Login'))
const Page404 = React.lazy(() => import('../views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('../views/pages/page500/Page500'))

const AuthRouter = () => {
  const { loggedIn } = useAuthValue()
  return (
    <>
      <Routes>
        {loggedIn ? (
          <Route path="*" id="Home" element={<DefaultLayout />} />
        ) : (
          <>
            <Route path="*" id="Login Page" element={<Login />} />
            <Route path="/404" id="Page 404" element={<Page404 />} />
            <Route path="/500" id="Page 500" element={<Page500 />} />
          </>
        )}
      </Routes>
    </>
  )
}

export default React.memo(AuthRouter)
