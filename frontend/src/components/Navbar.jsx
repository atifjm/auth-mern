import "./Navbar.scss";
import {Link} from "react-router-dom"

const Navbar = () => {
  const user = false;
  return (
    <div className="navbar">
      <div className="left">
        <span>MERN-AUTH</span>
      </div>

      <div className="middle">
        <div className="menubar">
          <div className="menuitem">
            <Link className="links" to="/"><span>Home</span></Link>
            <Link className="links" to="/about"><span>About</span></Link>
            <span>Contact</span>
            <span>Blogs</span>
          </div>
        </div>
      </div>

      <div className="right">
        {user ? (
          <div className="user">
            <img src="Assets/avatar.png" alt="Profile Pic" />
            <span>Logout</span>
          </div>
        ) : (
          <div className="auth">
            <Link className="links" to="/login"><span>Login</span></Link>
            <Link className="links" to="/register"><span>Register</span></Link>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
