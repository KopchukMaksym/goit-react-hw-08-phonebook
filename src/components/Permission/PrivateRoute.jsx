import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectTokenAuth } from 'redux/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/login',
}) {
  const token = useSelector(selectTokenAuth);
  return <>{token ? <Outlet /> : <Navigate to={redirectTo} />}</>;
}
