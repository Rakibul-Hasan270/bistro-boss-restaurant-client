import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center'><progress className="mx-auto mt-14 progress w-56"></progress></div>
    }

    if (user) {
        return children
    };

    return <Navigate to='/login' state={{ from: location}} replace></Navigate>
};

export default PrivateRoute;