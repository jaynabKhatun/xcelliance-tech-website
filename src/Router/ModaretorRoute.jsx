import { Navigate } from "react-router-dom";
import UseRole from "../Hooks/UseRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import propTypes from "prop-types";

const ModaretorRoute = ({ children }) => {
    const [role, isLoading] = UseRole()
    if (isLoading) return <LoadingSpinner />
    if (role === 'moderator') return children;
    return <Navigate to={'/dashboard/myProfile'}></Navigate>
};

ModaretorRoute.propTypes = {
    children: propTypes.element.isRequired
};

export default ModaretorRoute;