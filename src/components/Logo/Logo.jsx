import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import logo from '../../images/logo-white.png'

export const Logo = () => {
  return (
    <div>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      ><span className={css.logoSpan}><img src={logo} width="50" height="50" />MB: 🤓wn IT</span>
        
      </NavLink>
    </div>
  );
};
