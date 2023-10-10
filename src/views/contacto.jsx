import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const estiloFormulario = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  marginTop: '-10vh',
};

function Contacto () {
return (
  <div style={estiloFormulario}>
  <Form className="w-50 text-center">
    <h2>Cuéntanos, ¿En qué te podemos ayudar?</h2>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label >Ingresa tu correo</Form.Label>
      <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

       <Button variant="danger" type="text">
         Enviar
       </Button>
     </Form>
     </div>

   );
 }

 export default Contacto;