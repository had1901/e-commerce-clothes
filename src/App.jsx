
import { useSelector } from 'react-redux'
import { Outlet, Route, Routes } from 'react-router-dom'
import { useState } from 'react';

import AuthLayout from './components/auth/Layout';
import AuthLoginPage from './pages/auth/Login';
import AuthRegisterPage from './pages/auth/Register';

import AdminLayout from './components/admin-view/Layout';
import AdminDashboardPage from './pages/admin-view/Dashboard';
import AdminProductsPage from './pages/admin-view/Products';
import AdminOrdersPage from './pages/admin-view/Orders';

import ShoppingLayout from './components/shopping-view/Layout';
import ShoppingHomePage from './pages/shopping-view/Home';
import ShoppingAccountPage from './pages/shopping-view/Account';
import ShoppingCheckoutPage from './pages/shopping-view/Checkout';
import ShoppingListingPage from './pages/shopping-view/Listing';

import NotFound from './pages/not-found';
import CheckAuth from './components/common/CheckAuth';
import UnAuthPage from './pages/unAuth-page';

function App() {
  const state = useSelector(state => state.auth)
  const isAuthenticated = false
  const user = {name: 'ok', role: 'admin'}
  console.log(state)

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>

        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >
            <AuthLayout />
          </CheckAuth>
        }>
            <Route path='login' element={<AuthLoginPage />} />
            <Route path='register' element={<AuthRegisterPage />} />
        </Route>

        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>

        }>
          <Route path='dashboard' element={<AdminDashboardPage />} />
          <Route path='products' element={<AdminProductsPage />} />
          <Route path='orders' element={<AdminOrdersPage />} />
        </Route>

        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path='home' element={<ShoppingHomePage />} />
          <Route path='listing' element={<ShoppingListingPage />} />
          <Route path='checkout' element={<ShoppingCheckoutPage />} />
          <Route path='account' element={<ShoppingAccountPage />} />
        </Route>
        <Route path='unauth-page' element={<UnAuthPage />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
