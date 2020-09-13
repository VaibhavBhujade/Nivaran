import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem ,Button,ButtonGroup,Form,FormControl} from 'react-bootstrap';


class MyNavBar extends React.Component {

    render(){
    return(
    
    <>

        <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"><h4 style={{ color: 'white' }}>Home</h4></Nav.Link>
                        <Nav.Link href="#link"><h4 style={{ color: 'white' }}>About us</h4></Nav.Link>
                        <Nav.Link href="#link"><h4 style={{ color: 'white' }}>Contact</h4></Nav.Link>
                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Navbar.Collapse>
        </Navbar>
    </>
    );

    }
}


ReactDOM.render(<MyNavBar />, document.getElementById('root'));
export default MyNavBar;
