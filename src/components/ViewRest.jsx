import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {
  //1Get id from the params
  // const params = useParams()
  // console.log(params);
  //2destructuing
  const { id } = useParams()
  console.log(id);
// create base url
const base_url = 'https://restau-server-tysn.onrender.com/restaurants'

//state creation for holding particular restuarant details
const [ViewRestData,setViewRestData] = useState([])



//view particular restaurant details
const viewRestaurant = async()=>{
  const {data} = await axios.get(`${base_url}/${id}`)
  console.log(data);
  setViewRestData(data);
}
useEffect(()=>{
  viewRestaurant()
},[])

  return (
    <div>
      <Row >
<Col className='m-5 p-3'>
<img src={ViewRestData.photograph} width={'350px'} alt="" />
</Col>
<Col className='mt-5 p-5'>
{/* content */}
<h3>{ViewRestData.name}</h3>
<ListGroup  variant="flush">
     
      <ListGroup.Item>Neighborhood:{ViewRestData.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Address:{ViewRestData.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine_type:{ViewRestData.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><RestOp op= {ViewRestData.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview rv={ViewRestData.reviews}/></ListGroup.Item>
    </ListGroup>
</Col>

      </Row>

    </div>
  )
}

export default ViewRest