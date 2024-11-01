/* eslint-disable react/prop-types */
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import '../styles/protocolFormView.module.scss';

function SACForm({ onBack }) {
  return (
    <Container className="sac-form" >
      <h4 className="text-center mb-3">SAC - Serviço de Atendimento ao Consumidor</h4>

      {/* Dados do Consumidor */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Dados do Consumidor</h5>
          <Row>
            <Col md={8}>
              <Form.Group>
                <Form.Label>Nome do Consumidor:</Form.Label>
                <Form.Control readOnly defaultValue="KATIANE ASSUNÇÃO SILVA" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Bairro:</Form.Label>
                <Form.Control readOnly defaultValue="CAMBOA" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Form.Group>
                <Form.Label>Endereço:</Form.Label>
                <Form.Control readOnly defaultValue="Rua Santo Inácio de Loiola, 140" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Telefone(s):</Form.Label>
                <Form.Control readOnly defaultValue="(98) 98787-7828" />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Relato do Cliente */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Relato do Cliente</h5>
          <Form.Control as="textarea" rows={3} readOnly defaultValue="Estrutura quebrada. Recibo: 3188." />
        </Card.Body>
      </Card>

      {/* Análise da Ocorrência */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Análise da Ocorrência</h5>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Como:</Form.Label>
                <Form.Control readOnly defaultValue="Estrutura de madeira quebrada" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Quando:</Form.Label>
                <Form.Control readOnly defaultValue="Data da entrega" />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Solução da Ocorrência */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Solução da Ocorrência</h5>
          <Form.Control readOnly defaultValue="Troca da estrutura" />
        </Card.Body>
      </Card>

      {/* Garantia Excluída */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Garantia Excluída nos Casos Abaixo:</h5>
          <ul>
            <li>Falta do comprovante de aquisição do produto.</li>
            <li>Se o produto estiver fora do prazo de garantia.</li>
            <li>Qualquer tipo de sujeira ou contaminação com substância líquida.</li>
            <li>Uso inadequado, falta de ventilação e umidade.</li>
            <li>Uso indevido, inclusive sobre objetos cortantes ou perfurantes.</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Observações Gerais */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Observações Gerais</h5>
          <Form.Control as="textarea" rows={3} readOnly defaultValue="ATENÇÃO: Produto enviado para fábrica sem defeito, cobrados custos ao remetente." />
        </Card.Body>
      </Card>

      {/* Assinatura e Comprovante de Prestação */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Comprovante de Prestação do Serviço (Assistência Técnica)</h5>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Assinatura do Cliente</Form.Label>
                <Form.Control readOnly defaultValue="KATIANE ASSUNÇÃO SILVA" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Assinatura do Técnico/Representante</Form.Label>
                <Form.Control readOnly defaultValue="Carlos Silva" />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Botão de Voltar */}
      <div className="text-center">
        <Button variant="secondary" onClick={onBack}>Voltar</Button>
      </div>
    </Container>
  );
}

export default SACForm;
