import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';
import logo from '../Images/logo.png';

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="d-fleX shadow text-center">
                 <Navbar.Brand as={Link} to='/'>
                 <img
                      src={logo}
                      width="200"
                      height="30"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                 />
                 </Navbar.Brand>
                
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                 <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mx-auto">
                         <Nav.Link className="mr-2" as={NavLink} to='/'>HOME</Nav.Link>
                         <Nav.Link className="mr-2" as={NavLink} to='/service'>SERVICE</Nav.Link>
                         <Nav.Link className="mr-2" as={NavLink} to='/technology'>TECHNOLOGY</Nav.Link>
                         <Nav.Link className="mr-2" as={NavLink} to='/about'>ABOUT</Nav.Link>
                         <Nav.Link className="mr-2" as={NavLink} to='/contact'>CONTACT</Nav.Link>
                          
                     </Nav>
                 </Navbar.Collapse>
             </Navbar>
            
        </div>
    )
}

export default Header

