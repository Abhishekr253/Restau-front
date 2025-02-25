import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link}  from 'react-router-dom'


function ResttCard({ restArray }) {
    console.log(restArray);
    return (
        <div>
            <div className="row">
                {
                    restArray.map(item => (
                        <div className="col">
                      
                        <Card style={{ width: '19rem',  }}>
                                <Card.Img className='m-2 p-2 ' width={'200px'} variant="top" src ={item.photograph} />
                                <Card.Body className='text-center ' >
                                    <Card.Title >{item.name}</Card.Title>
                                  <Card.Text>
                                    <p>cuisine type: {item.cuisine_type}</p>
                                    <p>Address : {item.address}</p>
                                     </Card.Text>
                                     <Link to={`/view/${item.id}`}>
                                    <Button variant="primary">More About</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                      
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ResttCard