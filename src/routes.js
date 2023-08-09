import React from 'react'

const Customers = React.lazy(() => import('./views/customers'))
const Suppliers = React.lazy(() => import('./views/supplier'))
const Orders = React.lazy(() => import('./views/order'))
const Login = React.lazy(() => import('./views/pages/login/Login'))

const routes = [
  { path: '/customers', name: 'Customers', element: Customers },
  { path: '/suppliers', name: 'Suppliers', element: Suppliers },
  { path: '/orders', name: 'Orders', element: Orders },
  { path: '/login', name: 'Login', element: Login },
  { path: '/login', name: 'Login', element: Login },
]

export default routes
