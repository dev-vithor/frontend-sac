import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import '../styles/protocolFormView.module.scss';

function ProtocolFormView({ protocol, onBack }) {
  return (
    <Container className="p-4 protocol-form">
      <h2 className="text-center mb-4">Protocolo de Atendimento</h2>

      {/* Dados Pessoais */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Dados Pessoais</h5>
          <Row>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.nome} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Idade</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.idade} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>CPF</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.cpf} />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Documentação */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Documentação</h5>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Número do Documento</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.numeroDocumento} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Tipo de Documento</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.tipoDocumento} />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Resultado do protocolo */}
      <Card className="mb-4">
        <Card.Body>
          <h5>PROTOCOLO</h5>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Numero do PROTOCOLO</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.numProtocolo} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Protocolo em Aberto</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.protoEmAberto ? "Sim" : "Não"} />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Dados do tipo de defeito */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Dados Familiares</h5>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Pai</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.pai} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Mãe</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.mae} />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Escolaridade */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Escolaridade</h5>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Ensino Fundamental</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.ensinoFundamental} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Ensino Médio</Form.Label>
                <Form.Control plaintext readOnly defaultValue={protocol.ensinoMedio} />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Botão Voltar */}
      <div className="text-center">
        <Button variant="secondary" onClick={onBack}>Voltar</Button>
      </div>
    </Container>
  );
}

// Definindo os tipos das props usando PropTypes
ProtocolFormView.propTypes = {
  protocol: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    cpf: PropTypes.string.isRequired,
    numeroDocumento: PropTypes.string.isRequired,
    tipoDocumento: PropTypes.string.isRequired,
    numProtocolo: PropTypes.string.isRequired,
    protoEmAberto: PropTypes.bool.isRequired,
    pai: PropTypes.string.isRequired,
    mae: PropTypes.string.isRequired,
    ensinoFundamental: PropTypes.string.isRequired,
    ensinoMedio: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ProtocolFormView;
