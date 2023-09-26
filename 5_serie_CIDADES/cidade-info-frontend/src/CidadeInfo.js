import React from 'react';

function CidadeInfo(props) {
  const { nome, imagem, informacoes } = props.data;

  return (
    <div>
      <h2>{nome}</h2>
      <img src={`/data/images/${imagem}`} alt={nome} />
      <p>{informacoes}</p>
      <button onClick={props.onClose}>Fechar</button>
    </div>
  );
}

export default CidadeInfo;



