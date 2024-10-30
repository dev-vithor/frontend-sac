import { Form, Button } from 'react-bootstrap';

function ProtocolFormPendente() {
  return (
    <Form>
      <h4>Formulário: Protocolo Pendente</h4>
      <Form.Group className="mb-3" controlId="protocolNumber">
        <Form.Label>Número do Protocolo</Form.Label>
        <Form.Control type="text" placeholder="Digite o número do protocolo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="clientName">
        <Form.Label>Nome do Cliente</Form.Label>
        <Form.Control type="text" placeholder="Digite o nome do cliente" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pendingReason">
        <Form.Label>Motivo da Pendência</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="warning" type="submit">Salvar</Button>
    </Form>
  );
}

export default ProtocolFormPendente;
