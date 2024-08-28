/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import '../Item/item.css'
import {useState} from 'react';
import { Modal } from 'react-bootstrap';
import { Link} from 'react-router-dom'


const Item = ({element}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Col key={element.id}>
        <Link to={`/Item/${element.id}`} style={{textDecoration: 'none'}}>
            <Card style={{ boxShadow: '1px 1px 10px 1px #9e9e9e'}}>
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
                <ListGroup.Item>$ {element.price}</ListGroup.Item>
            </Card>
          </Link>
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