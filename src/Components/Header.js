import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                 <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
                
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                 <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mr-auto">
                         <Nav.Link as={NavLink} to='/'>HOME</Nav.Link>
                         <Nav.Link as={NavLink} to='/service'>SERVICE</Nav.Link>
                         <Nav.Link as={NavLink} to='/technology'>TECHNOLOGY</Nav.Link>
                         <Nav.Link as={NavLink} to='/about'>ABOUT</Nav.Link>
                         <Nav.Link as={NavLink} to='/contact'>CONTACT</Nav.Link>
                          
                     </Nav>
                 </Navbar.Collapse>
             </Navbar>
            
        </div>
    )
}

export default Header

