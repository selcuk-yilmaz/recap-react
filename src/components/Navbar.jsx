import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";

function NavBar() {
  const { sidebarToggle, setSidebarToggle } = useContext(UserContext);

  const sidebarWidth = sidebarToggle ? "300px" : "50px";

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <i
          class="fa-solid fa-bars text-white ms-5"
          style={{ cursor: "pointer" }}
          onClick={() => setSidebarToggle(!sidebarToggle)}
        ></i>

        <Navbar.Brand href="#home" className="ms-4">
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown
            title="Dropdown"
            // id="basic-nav-dropdown"
            aria-haspopup="true"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#login">Logout</Nav.Link>
        </Nav>
      </Navbar>

      <Nav
        className="sidebar me-auto flex-column"
        style={{ width: sidebarWidth }}
      >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="▼ Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Actions</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another actions</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Somethings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#login">Logout</Nav.Link>
        <div className="mb-2">
          <DropdownButton
            as="ButtonGroup"
            key="direction"
            id="dropdown-button-drop-end"
            drop="end"
            variant="secondary"
            title="Language Options"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </div>
      </Nav>
    </>
  );
}

export default NavBar;
