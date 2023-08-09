import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCart, cilGroup, cilTruck } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Customers',
    to: '/customers',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Suppliers',
    to: '/suppliers',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: '/orders',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
]

export default _nav
