import PropTypes from 'prop-types';
import { Container, Nav, Navbar, Badge } from 'react-bootstrap';

function NavBar({ brand }) {
  return (
    <Navbar bg='light' expand='md'>
      <Container>

        <Navbar.Brand href='#home'>
          {brand} <Badge bg='dark'>Beta</Badge>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>HOME</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

NavBar.defaultProps = { brand: 'REACT TODO APP' }

NavBar.propTypes = { brand: PropTypes.string.isRequired }

export default NavBar;
