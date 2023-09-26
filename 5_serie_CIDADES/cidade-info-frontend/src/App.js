import React, { useState } from 'react';
import CidadeList from './CidadeList';
import CidadeInfo from './CidadeInfo';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (cityId) => {
    // Fazer uma solicitação ao servidor para obter os dados da cidade com base no ID
    fetch(`/cidade/${cityId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedCity(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados da cidade:', error);
      });
  };

  const handleCloseCityInfo = () => {
    setSelectedCity(null);
  };

  return (
    <div className="App">
      <CidadeList onCityClick={handleCityClick} />
      {selectedCity && <CidadeInfo data={selectedCity} onClose={handleCloseCityInfo} />}
    </div>
  );
}

export default App;

