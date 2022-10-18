import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from 'components/AppLayout'
import Home from './Home'
import About from './About'
import AccountsRoutes from './accounts'

const Root = () => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/accounts/*' element={<AccountsRoutes />} />
        </Routes>
      </AppLayout>
    </>
  )
}

export default Root
