import logo from "../Images/logo-t.png";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <img src={logo} className="logo-t" />
          </NavItem>
          <NavItem className="nav-link a">
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">login</Link>
          </NavItem>
          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>

          <NavItem>
            <Link to="/register">Logout</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
