import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    //we have to wait for user to load
    console.log(loading);
    if(loading) return <h1 className="text-5xl">Loading.....</h1>
    if (!user?.email) {
        return <Navigate to='/login' />
    }
    return children;
};

export default PrivateRoute;