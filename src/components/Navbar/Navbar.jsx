import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div >
        <NavLink  className='link'to="/">
          <button>Home</button>
        </NavLink>
      </div>
      <div className={style.divright}>
        <NavLink to="/about">
          <button>about</button>
        </NavLink>
        <NavLink to="/products">
          <button>Products</button>
        </NavLink>
        <NavLink to="/posts">
          <button>posts</button>
        </NavLink>
        <NavLink to="/form">
          <button>form</button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Navbar;
