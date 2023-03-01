import  {Navigate, Outlet}  from 'react-router-dom';

interface Props{
    isAllowed: boolean;
    childen ?: React.ReactNode;
}


export const ProtectedRoute = ({isAllowed,childen}:Props)=>{

    if(!isAllowed) return <Navigate to="/login" />
    
    return childen ? <>{childen}</> : <Outlet />;
}