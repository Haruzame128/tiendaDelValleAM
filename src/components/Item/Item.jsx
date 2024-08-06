import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import '../Item/item.css'
import {useState} from 'react';
import { Modal } from 'react-bootstrap';


const Item = ({element}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Col key={element.id}>
            <Card>
                <Card.Body>
                <div className='imgContainer'>
                    <Card.Img 
                        variant="top"
                        className='imgItem' 
                        src={element.image} 
                        onClick={handleShow} 
                        style={{objectFit: 'cover' }}
                    />
                </div>
                    <Card.Title className='itemTittle'>{element.name}</Card.Title>
                    <Card.Text>
                    {element.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$ {element.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
            </Card>
        </Col>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Imagen Expandida</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={element.image} 
            alt="full" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Item