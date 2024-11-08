/* eslint-disable react/prop-types */
import "../styles/protocolFormView.scss";

function SACForm({ onBack }) {
  return (
    <div className="container">
      <h4 className="title">SAC - Serviço de Atendimento ao Consumidor</h4>

      {/* Dados do Consumidor */}
      <div className="card">
        <div className="card-body">
          <h5>Dados do Consumidor</h5>
          <div className="row gx-2 numberProtocol ">
            <div className="col-md-3">
              <div className="form-group">
                <label>N°</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="S20170130090001"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <label>Nome do Consumidor:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="KATIANE ASSUNÇÃO SILVA"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Bairro:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="CAMBOA"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>CPF:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="052.182.222-22"
                />
              </div>
            </div>
          </div>
          <div className="row gx-2" >
            <div className="col-md-4">
              <div className="form-group">
                <label>Endereço:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="Rua Santo Inácio de Loiola, 140"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Telefone(s):</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="(98) 98787-7828"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Cidade / UF:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="SAO LUIS / MA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relato do Cliente */}
      <div className="card">
        <div className="card-body">
          <h5>Relato do Cliente</h5>
          <textarea
            rows="3"
            className="form-control"
            readOnly
            defaultValue="Estrutura quebrada. Recibo: 3188."
          />
        </div>
      </div>

      {/* Análise da Ocorrência */}
      <div className="card">
        <div className="card-body">
          <h5>Análise da Ocorrência</h5>
          <div className="row gx-2">
            <div className="col-md-4">
              <div className="form-group">
                <label>Como:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="Estrutura de madeira quebrada"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Quando:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="02/12/2022"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Imagem:</label>
                <input
                  type="file"
                  name="arquivos"
                  className="btn"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solução da Ocorrência */}
      <div className="card">
        <div className="card-body">
          <h5>Solução da Ocorrência</h5>
          <div className="row gx-2">
            <div className="col-md-5">
              <div className="form-group">
                <label>Tipo da Solução</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="Troca da estrutura"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <label>Responsavel:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="Socimol Ltda ocorrência"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Observações Gerais */}
      <div className="card">
        <div className="card-body">
          <h5>Observações Gerais</h5>
          <textarea
            rows="2"
            className="form-control"
            readOnly
            defaultValue="ATENÇÃO: Produto enviado para fábrica sem defeito, cobrados custos ao remetente."
          />
        </div>
      </div>

      {/* Assinatura do Cliente */}
      <div className="card">
        <div className="card-body">
          <div className="row gx-2">
            <div className="col-md-4">
              <div className="form-group">
                <label>Nome do Cliente:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="KATIANE ASSUNÇÃO SILVA"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Data:</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  defaultValue="02/12/2022"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Assinatura:</label>
                <input
                  type="file"
                  name="arquivos"
                  className="btn"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão de Voltar */}
      <div className="button-container">
        <button className="back-button" onClick={onBack}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default SACForm;
