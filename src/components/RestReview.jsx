import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
function RestReview({rv}) {
    console.log(rv);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
          <Button variant="primary" onClick={handleShow}>
        Reviews
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
rv?.map(item=>(
    
    <Card >
    <Card.Body>
      <Card.Title>Reviews About Restaurant</Card.Title>
      <Card.Text>
     <h3>{item.name}</h3>
     <p>{item.date}</p>
     <p>{item.rating}</p>
     <p>{item.comments}</p>
      </Card.Text>
    </Card.Body>
  </Card>
))

          }




        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default RestReview