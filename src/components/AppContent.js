import React, { Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = localStorage.getItem('login')

  useEffect(() => {
    if (auth === 'login') {
      if (location.pathname === '/') {
        navigate('/customers')
      } else if (!['/customers', '/suppliers', '/orders'].includes(location.pathname)) {
        navigate('/404')
      } else {
        navigate(location.pathname)
      }
    } else {
      navigate('/login')
    }
  }, [auth, navigate])

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="/customers" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
