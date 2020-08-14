import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavBar } from '../styles/Navbar';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <NavBar>
          <Navbar bg='light' expand='lg' className='nav'>
            <Navbar.Brand className='logo' href='#home'>
              DIGEVO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='items'>
                <Nav.Link className='opcion' href='#home'>
                  Home
                </Nav.Link>
                <NavDropdown
                  className='lista'
                  title='Demos'
                  id='basic-nav-dropdown'>
                  <NavDropdown.Item
                    href='https://demos-digevo.vercel.app/blazeface.html'
                    className='dd-item'>
                    Blazeface Demo - Vision
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='https://demos-digevo.vercel.app/body-pix.html'
                    className='dd-item'>
                    Body-pix Demo - Vision
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/' className='dd-item'>
                    Coco SSD Demo
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='https://demos-digevo.vercel.app/facemesh.html'
                    className='dd-item'>
                    Facemesh Demo - Vision
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href='https://demos-digevo.vercel.app/camera.html'
                    className='dd-item'>
                    Pose Estimation - Camera feed demo
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='https://demos-digevo.vercel.app/coco.html'
                    className='dd-item'>
                    Pose Estimation - Image demo
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  className='opcion'
                  rel='noreferrer'
                  target='_blank'
                  href='https://digevo.com/contacto/'>
                  Contacto
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </NavBar>
      </>
    );
  }
}
export default Navigation;
