import { Container, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";



function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Corvette Purchase Order</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/customers">Customer List</Nav.Link>
            <Nav.Link as={Link} to="/orders">Purchase Orders</Nav.Link>
            {/* <Nav.Link as={Link} to="/order/new">Create PO</Nav.Link> */}
            {/* <Button variant="outline-secondary" as={Link} to="/order/new">Create PO</Button> */}
          </Nav>
          <Nav>
            <NavDropdown title={`Paul "Vette" Chutiya`} id="collasible-nav-dropdown">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;