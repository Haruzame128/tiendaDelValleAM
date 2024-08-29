
import Form from 'react-bootstrap/Form';
import './Contacto.css'
import Button from 'react-bootstrap/Button';
const Contact = () => {
  return (
    <>
    <div className='container'>
      <h1 className='tituloContenedor'>Contacto</h1>
    </div>
    <Form style={{width: '50%', margin: 'auto'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Direccion de E-Mail</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tu Consulta</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
    
  </>
  )
}

export default Contact