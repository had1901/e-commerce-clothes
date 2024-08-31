import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({ isAuthenticated, user, children }) {
    const location = useLocation()
    console.log(location)
    // Nếu chưa Login và URL hiện tại không phải là Login, Register thì chuyển hướng trang Login
    if(!isAuthenticated && (!location.pathname.includes('/auth/login') && !location.pathname.includes('/auth/register'))) {
        console.log(1)
        return <Navigate to='/auth/login' />
    }
    // Nếu đã Login và URL hiện tại là Login, Register thì check User
    if(isAuthenticated && (location.pathname.includes('auth/login') || location.pathname.includes('/auth/register'))) {
        console.log(2)
        // Nếu Role là Admin thì chuyển trang Admin ngược lại thì về trang User
        if(user?.role === 'admin') {
            console.log(2.1)

            return <Navigate to='/admin/dashboard' />
        } else {
            console.log(2.2)

            return <Navigate to='/shop/home' />
        }
    }
    // Nếu đã Login và Role không phải Admin và URL hiện tại là Admin thì chuyển hướng No-page
    if(isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')) {
        console.log(4)

        return <Navigate to='/unauth-page' />
    }
    // Nếu đã login và Role là Admin và URL hiện tại là Shop thì chuyển hướng trang Dashboard Admin
    if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')) {
        console.log(5)

        return <Navigate to='/admin/dashboard' />
    }

    return <>{children}</>
}

export default CheckAuth