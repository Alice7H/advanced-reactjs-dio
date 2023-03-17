import React from 'react';
import PropTypes from 'prop-types';

function Exercise({ subjects, isRegistered, onClick, address, name, age }) {

  const fullAddress = `${address.street} ${address.number}, ${address.city}-${address.state}, ${address.district}, cep: ${address.cep}`;

  return (
    <>
      <h1>Treino com PropTypes</h1>
      <h2>Componente com propriedades "string", "number", "array", "bool", "object", "func" </h2>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Matérias: {subjects.join(', ')}</p>
      <p>Matriculado: {isRegistered ? 'Sim' : 'Não'} </p>
      <p>Endereço: {fullAddress}</p>
      <button type="button" onClick={onClick}>Confirme as informações</button>
    </>
  );
}

Exercise.defaultProps = {
  name: 'Desconhecido',
  age: 20
}

Exercise.propTypes = {
  subjects: PropTypes.array.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  address: PropTypes.shape({
    cep: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    district: PropTypes.string,
    number: PropTypes.number
  }).isRequired,
  name: PropTypes.string,
  age: PropTypes.number
}


export default Exercise;