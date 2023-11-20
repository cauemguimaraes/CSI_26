import React from 'react';

const cities = [
  { id: 1, name: 'Nova York' },
  { id: 2, name: 'Los Angeles' },
  { id: 3, name: 'Paris' },
  { id: 4, name: 'Londres' },
];

function CidadeList(props) {
  return (
    <div>
      <h2>Lista de Cidades</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id} onClick={() => props.onCityClick(city.id)}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CidadeList;
