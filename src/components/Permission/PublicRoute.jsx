import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectTokenAuth } from 'redux/selectors';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/register',
}) {
  const token = useSelector(selectTokenAuth);
  const shouldRedirect = !!token && restricted;
  return <> {shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />}</>;
}
