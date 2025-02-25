import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"className='fs-4'>
      <i class="fa-solid fa-utensils fa-bounce m-2"></i>
        RR Restocafe
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header