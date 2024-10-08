/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({element}) => {
    const { addToCart } = useCartContext();
    const handleOnBuy = (cantidad) => {
        addToCart(element, cantidad);
    }
    return (
     <Row xs={1} md={1} lg={1} className="g-4" style={{width: '75%', margin: 'auto', textAlign: 'center'}}>
          <Col key={element.id}>
              <Card style={{ boxShadow: '1px 1px 10px 1px #9e9e9e'}}>
                  <Card.Body>
                  <div style={{width: '100%', margin: 'auto'}}>
                      <Card.Img 
                          variant="top"
                          src={element.image} 
                          style={{objectFit: 'cover', width: '50%', height: '50%' }}
                      />
                      </div>
                  </Card.Body>
                  <Card.Body>
                      <Card.Title className='itemTittle'>{element.name}</Card.Title>
                      <Card.Text>
                          {element.description}
                      </Card.Text>
                  </Card.Body>
                  <ListGroup.Item>$ {element.price}</ListGroup.Item>
                  <Card.Body>
                    <ItemCount stock={element.stock} inicial={1} handleOnBuy={handleOnBuy}/>
                  </Card.Body>
              </Card>
          </Col>
      </Row> 
      
    )
}

export default ItemDetail