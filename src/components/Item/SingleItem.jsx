import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Item/item.css'
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProd } from '../../utils/fetchData'

const SingleItem = ({products}) => {
  const [prod, setProd] = useState([]);
  const {categoryID} = useParams();

  useEffect(() => {
    getProd(categoryID)
  .then((res)=>{
    setProd(res)
  })
  .catch((err)=>{
    console.log(err)
  })   
  }, [categoryID])


  return (
    <Row xs={1} md={1} lg={1} className="g-4" style={{width: '75%', margin: 'auto', textAlign: 'center'}}>
        <Col key={prod.id}>
            <Card style={{ boxShadow: '1px 1px 10px 1px #9e9e9e'}}>
                <Card.Body>
                <div style={{width: '100%', margin: 'auto'}}>
                    <Card.Img 
                        variant="top"
                        src={prod.image} 
                        style={{objectFit: 'cover' }}
                    />
                    </div>
                </Card.Body>
                <Card.Body>
                    <Card.Title className='itemTittle'>{prod.name}</Card.Title>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup.Item>$ {prod.price}</ListGroup.Item>
                <Card.Body>
                <Button variant="secondary">
                    Agregar al carrito
                </Button>
                </Card.Body>
            </Card>
        </Col>
    </Row> 
  )
}

export default SingleItem