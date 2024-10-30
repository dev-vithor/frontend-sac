import { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ProtocolFormLiquidado from '../components/protocolFormLiquidado';
import ProtocolFormPendente from '../components/protocolFormPendente';
// Importe os outros formulários conforme necessário

function Dashboard() {
  const [selectedForm, setSelectedForm] = useState(null);

  const renderForm = () => {
    switch (selectedForm) {
      case 'liquidado':
        return <ProtocolFormLiquidado />;
      case 'pendente':
        return <ProtocolFormPendente />;
      // Adicione outros casos conforme necessário
      default:
        return <p>Selecione uma situação para visualizar o formulário.</p>;
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Painel de Protocolos SAC</h2>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col md="auto">
          <Button variant="primary" onClick={() => setSelectedForm('liquidado')}>Liquidado</Button>
        </Col>
        <Col md="auto">
          <Button variant="secondary" onClick={() => setSelectedForm('pendente')}>Pendente</Button>
        </Col>
        {/* Adicione mais botões para as outras situações */}
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              {renderForm()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
