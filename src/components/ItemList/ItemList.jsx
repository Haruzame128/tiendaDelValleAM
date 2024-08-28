/* eslint-disable react/prop-types */
import Item from '../Item/Item'
import Row from 'react-bootstrap/Row';


const ItemList = ({products}) => {
  return (
        <Row xs={1} md={3} lg={4} className="g-4">
          {Array.from({ length: 1}).map(() => (
              products.map((element) => {
                  return <Item key={element.id} element={element}/>
              })
        ))}
    </Row>  
  )
}

export default ItemList