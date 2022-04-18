import React, { Component } from 'react';
import { Container, Form, FormControl, Navbar, Nav, Button } from 'react-bootstrap';
import logo from './logo192.png';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';

export default class Header extends Component {
  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              height="30"
              weight="30"
              className="d-inline-block align-top"
              alt="Logo" 
            /> React site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="me-auto" >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl  
                type='text'
                placeholder='Search'
                className="me-sm-2"
                /> 
              <Button variant="outline-info">Search</Button>
            </Form> 
          </Navbar.Collapse>
        </Container>
      </Navbar>

     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>      
      </BrowserRouter>

      </>
    );
  }
}
