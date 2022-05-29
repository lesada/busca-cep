import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.scss';
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('');



  async function handleSearch() {


    if (input === '') {
      return
    }

    try {
      const response = await api.get(`${input}/json`);
      setData(response.data);
      setInput('');
      setError('');
    }
    catch (err) {
      setInput('');
      setData('');
      if (err) setError(err);
    }


  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
        <div className="containerInput">
          <input type="text" className="input" placeholder="Digite o CEP..." value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#FFF" />
          </button>
        </div>
      {Object.keys(data).length > 0 && (
        <main className="main">
          <h2>CEP: {data.cep}</h2>
          <span>Logradouro: {data.logradouro}</span>
          <span>Complemento: {data.complemento}</span>
          <span>Bairro: {data.bairro}</span>
          <span>Cidade: {data.localidade} - {data.uf}</span>
        </main>
      )}
      {Object.keys(error).length > 0 && (
        <main className="main">
          <h2>O CEP não foi encontrado</h2>
          <span>Verifique se o CEP é válido e tente novamente</span>
        </main>
      )}
    </div>
  );
}

export default App;
