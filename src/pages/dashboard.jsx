import { useState } from 'react';

import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from 'react-bootstrap';

import '../styles/dashboard.scss'

import ProtocolFormView from '../components/protocolFormView';

function Dashboard() {
  const [selectedForm, setSelectedForm] = useState(null);
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  const renderTable = () => {
    return (
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>ID do Protocolo</th>
            <th>Data</th>
            <th>Status</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() =>
              setSelectedProtocol({
                id: 1,
                nome: "Protocolo 1",
                status: "Liquidado",
                data: "2024-10-31",
                descricao: "Exemplo de descrição",
              })
            }
          >
            <td>1</td>
            <td>12345</td>
            <td>2024-10-31</td>
            <td>Liquidado</td>
            <td>Descrição Exemplo</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  return (
    <Container className="dashboard">
      <Row className="text-center mt-4 mb-3">
        <h2>Painel de Protocolos SAC</h2>
      </Row>

      <Row className="navbar">
        <Col md="auto">
          <Button
            variant="primary"
            onClick={() => setSelectedForm("liquidado")}
          >
            Liquidado
          </Button>
        </Col>
        <Col md="auto">
          <Button
            variant="secondary"
            onClick={() => setSelectedForm("pendente")}
          >
            Pendente
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="info" onClick={() => setSelectedForm("reclamadas")}>
            Reclamadas
          </Button>
        </Col>
        <Col md="auto">
          <Button
            variant="success"
            onClick={() => setSelectedForm("atendidas")}
          >
            Atendidas
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="warning" onClick={() => setSelectedForm("recibo")}>
            Recibo
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="danger" onClick={() => setSelectedForm("cancelada")}>
            Cancelada
          </Button>
        </Col>
      </Row>

      <Row className="justify-content">
        <Col md={30}>
          <Card className="protocol-card">
            <Card.Body>
              {selectedProtocol ? (
                <ProtocolFormView
                  protocol={selectedProtocol}
                  onBack={() => setSelectedProtocol(null)}
                />
              ) : selectedForm ? (
                renderTable()
              ) : (
                <p className="text-table">
                  Selecione uma situação para visualizar os protocolos.
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
