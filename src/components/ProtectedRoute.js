import React from 'react'
import { Redirect, Route } from 'react-router'
import auth from '../auth/auth'
function ProtectedRoute({ children, ...props }) {
    return (
        <Route {...props} render={() => auth.isAuth ? children : <Redirect to='/login' />} />
    )
}

export default ProtectedRoute
