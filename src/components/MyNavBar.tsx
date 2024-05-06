import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DarkModeToggle from './ToggleTheme';
import Search from './Search';


const MyNavBar = () => {
    const links = [{
        name: "Profile", link: "/profile"
    }, {
        name: "testing", link: "/testing"
    }]

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className="navbar-brand" href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'><Search /></Nav>
                    <Nav className="ms-auto">
                        <NavDropdown title="Settings" id="basic-nav-dropdown" className='my-auto'>
                            {links.map((link, index) => {
                                return <NavDropdown.Item key={index} href={link.link} >{link.name}</NavDropdown.Item>
                            })}
                        </NavDropdown>
                        <Nav className='my-auto'><DarkModeToggle /></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;