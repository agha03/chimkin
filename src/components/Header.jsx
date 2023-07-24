import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from "reactstrap";
import logo from "../assets/chikn-tinder-logo.png";

function Header() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Navbar color="faded" dark>
      <NavbarBrand href="/" className="me-auto">
        <img style={{ height: "3rem" }} src={logo} />
      </NavbarBrand>
      <NavbarToggler
        onClick={() => setCollapsed(!collapsed)}
        className="me-2"
      />
      <Collapse isOpen={!collapsed} navbar>
        <Nav tabs>
          <NavItem>
<<<<<<< HEAD
            <NavLink  tag={Link} to="/">
=======
            <NavLink className="text-white" tag={Link} to="/">
>>>>>>> 4f9bd43eea012060e82a2acf290be16194e183c7
              Rate Chickens
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" tag={Link} to="/view">
              View All Chickens
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" tag={Link} to="/submit">
              Submit Chicken
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
