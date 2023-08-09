import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://alghifarifikri.vercel.app" target="_blank" rel="noopener noreferrer">
          Alghifari Fikri
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://alghifarifikri.vercel.app" target="_blank" rel="noopener noreferrer">
          Alghifari Fikri
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
