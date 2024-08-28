/* eslint-disable react/prop-types */

import Row from 'react-bootstrap/Row';
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailList = ({products}) => {
    return (
        <Row xs={1} md={3} lg={4} className="g-4">
            {products && Object.keys(products).length > 0 ? (
                <ItemDetail key={products.id} element={products} />
            ) : (
                <div></div>
            )}
    </Row>  
  )
}

export default ItemDetailList