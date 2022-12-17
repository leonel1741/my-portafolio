import React, { useState } from 'react';
import '../styles/navBar.css';
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import logoPersonal from '../assets/logo-personal.png';


const MyNavBar = ({ scrollHeight, ids }) => {

  const [isVisible, setIsVisible] = useState(false);

  const closeMenu = () => {
    setIsVisible(false);
  }

  return (
    <header className={`navbar-container ${scrollHeight > 100 ? 'scrolling' : ''}`}>
      <h1 className='title'>
        <a className="navbar-brand" href="#">{'{LACM - DEV }'}
        </a>
      </h1>
      <button className="navbar-toggler" type="button" onClick={() => setIsVisible(!isVisible)}>
        <svg className={`button-svg ${isVisible ? "btn-no-visible" : ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
        <i className={`fa-solid fa-x btn-no-visible ${isVisible ? "btn-visible" : ""}`}></i>
      </button>
      <nav className={`navbar-section ${isVisible ? 'visible' : ''}`} >
        <ul className="navbar">
          <li className="nav-item">
            <a href={`#${ids.idAboutMe}`} onClick={closeMenu}>About Me</a>
          </li>
          <li className="nav-item">
            <a href={`#${ids.idSkills}`} onClick={closeMenu}>My Skills</a>
          </li>
          <li className="nav-item">
            <a href={`#${ids.idProyects}`} onClick={closeMenu}>My Proyects</a>
          </li>
          <li className="nav-item">
            <a href={`#${ids.idContactMe}`} onClick={closeMenu}>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
    //     <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default MyNavBar;