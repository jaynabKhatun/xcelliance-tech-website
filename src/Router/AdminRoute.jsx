import { Navigate } from "react-router-dom";
import UseRole from "../Hooks/UseRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import propTypes from "prop-types";

const AdminRoute = ({ children }) => {
    const [role, isLoading] = UseRole();
    if (isLoading) return <LoadingSpinner />
    if (role === 'admin') return children;
    return <Navigate to={'/dashboard/myProfile'}></Navigate>
};

AdminRoute.propTypes = {
    children: propTypes.element.isRequired,
};

export default AdminRoute;