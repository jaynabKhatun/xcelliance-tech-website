import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'

import useAuth from '../Hooks/UseAuth'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <span className="loading loading-infinity loading-lg"></span>
    if (user) return children
    return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
    children: PropTypes.element,
}

export default PrivateRoute