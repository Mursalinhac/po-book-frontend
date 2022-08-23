import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";



function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Corvette Purchase Order</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/customers">Customer List</Nav.Link>
            <Nav.Link as={Link} to="/orders">Trade-in</Nav.Link>
            {/* <Nav.Link as={Link} to="/order/new">Create PO</Nav.Link> */}
            {/* <Button variant="outline-secondary" as={Link} to="/order/new">Create PO</Button> */}
          </Nav>
          <Nav>
            <NavDropdown title={`Paul Zwick`} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;