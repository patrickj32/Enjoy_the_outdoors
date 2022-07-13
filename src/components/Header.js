import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Compass from '../images/compass.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
// import NavDropdown from 'react-bootstrap/NavDropdown'

function Header(props) {



    return (

        <Container fluid>
            <Navbar bg="light" expand="lg" className='Navbar' sticky="top"  >

           
                <Navbar.Brand href="#home"><img height="85" src={Compass}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="NavText" >
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#link">Find your park</Nav.Link>
                        <Nav.Link href="#link">Info</Nav.Link>
                    <Form className="d-flex">
                        <Form.Control   
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="SearchButton" variant="outline-dark">Search
                        
                        </Button>
                    </Form>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </Container >





    )
}
export default Header