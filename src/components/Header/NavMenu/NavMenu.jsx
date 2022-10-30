import { NavLink } from 'react-router-dom';

import s from '../NavMenu/NavMenu.module.css';

const NavMenu = () => {
  return (
    <nav className={s.nav__Menu}>
      <NavLink className={s.nav__Link} end to="/register">
        Register
      </NavLink>
      <NavLink className={s.nav__Link} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default NavMenu;
