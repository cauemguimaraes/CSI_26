import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cidades, setCidades] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);

  useEffect(() => {
    fetch('/cidades')
      .then((response) => response.json())
      .then((data) => setCidades(data))
      .catch((error) => console.error('Erro ao buscar dados das cidades:', error));
  }, []);

  const handleCidadeClick = (cidade) => {
    setCidadeSelecionada(cidade);
  };

  const handleCloseCidadeInfo = () => {
    setCidadeSelecionada(null);
  };

  return (
    <div className="App">
      <h1>Informações das Cidades</h1>
      <ul>
        {cidades.map((cidade, index) => (
          <li key={index} onClick={() => handleCidadeClick(cidade)}>
            {cidade.nome}
          </li>
        ))}
      </ul>
      {cidadeSelecionada && (
        <div className="cidade-info">
          <h2>{cidadeSelecionada.nome}</h2>
          <img src={`/images/${cidadeSelecionada.imagem}`} alt={cidadeSelecionada.nome} />
          <p>Estado: {cidadeSelecionada.estado}</p>
          <p>País: {cidadeSelecionada.pais}</p>
          <p>População: {cidadeSelecionada.populacao}</p>
          <button onClick={handleCloseCidadeInfo}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default App;
