import PropTypes from 'prop-types';
import { Card, Button } from "react-bootstrap";

function ProtocolFormView({ protocol, onBack }) {
  return (
    <Card className="p-4">
      <h4>Detalhes do Protocolo</h4>
      <p><strong>ID do Protocolo:</strong> {protocol.id}</p>
      <p><strong>Nome:</strong> {protocol.nome}</p>
      <p><strong>Status:</strong> {protocol.status}</p>
      <p><strong>Data:</strong> {protocol.data}</p>
      <p><strong>Descrição:</strong> {protocol.descricao}</p>

      {/* Botão de voltar */}
      <Button variant="secondary" onClick={onBack}>Voltar</Button>
    </Card>
  );
}

// Definindo os tipos de props esperados
ProtocolFormView.propTypes = {
  protocol: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ProtocolFormView;
