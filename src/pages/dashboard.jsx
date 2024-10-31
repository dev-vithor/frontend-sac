import { useState } from 'react';

import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from 'react-bootstrap';

import ProtocolFormLiquidado from '../components/protocolFormLiquidado';
import ProtocolFormPendente from '../components/protocolFormPendente';

// Importe os outros formulários conforme necessário

function Dashboard() {
  const [selectedForm, setSelectedForm] = useState(null);

  const renderForm = () => {
    switch (selectedForm) {
      case "liquidado":
        return <ProtocolFormLiquidado />;
      case "pendente":
        return <ProtocolFormPendente />;
      // Adicione outros casos conforme necessário
      default:
        return (
          <p className="text-center">
            Selecione uma situação para visualizar o formulário.
          </p>
        );
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Painel de Protocolos SAC</h2>
        </Col>
      </Row>

      {/* Seção de Botões */}
      <Row className="mb-4 justify-content-center">
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

      {/* Seção de Formulário ou Tabela */}
      <Row className="justify-content-center">
        <Col md={10}>
          <Card>
            <Card.Body>
              {renderForm()}

              {/* Tabela vazia, que será preenchida pelos dados do servidor futuramente */}
              {selectedForm && (
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
                    {/* Dados dos protocolos virão aqui */}
                    <tr>
                      <td colSpan="5" className="text-center">
                        Nenhum protocolo disponível
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
