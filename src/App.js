import {FiSearch} from 'react-icons/fi';
import './styles.scss';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" className="input" placeholder="Digite o CEP..." />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>
      <main className="main">
        <h2>CEP 9999999</h2>
        <span>Rua</span>
        <span>Complemento</span>
        <span>Bairro</span>
        <span>Cidade - Estado</span>
      </main>
    </div>
    );
}

export default App;
