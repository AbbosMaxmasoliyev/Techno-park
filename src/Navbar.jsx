import { Outlet, Link } from "react-router-dom";

//images
import Logo from "./images/logo/logo.png"

const Layout = () => {
  return (
    <div className="Navbar">
        <div className="block">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
      <nav className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
        </div>

      <Outlet />
    </div>
          
  )
};

export default Layout;