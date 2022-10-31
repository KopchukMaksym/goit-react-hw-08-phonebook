import { NavLink } from 'react-router-dom';

import s from '../NavMenu/NavMenu.module.css';

const NavMenu = () => {
  return (
    <nav className={s.nav__Menu}>
      <NavLink
        end
        className={({ isActive }) =>
          [s.navLink, isActive && s.active].join(' ')
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          [s.navLink, isActive && s.active].join(' ')
        }
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default NavMenu;
