import NavMenu from 'components/Header/NavMenu/NavMenu';
import UserMenu from 'components/Header/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectTokenAuth } from 'redux/selectors';

export const Header = () => {
  const token = useSelector(selectTokenAuth);
  return <header>{token !== null ? <UserMenu /> : <NavMenu />}</header>;
};
