import React from 'react'
import PropTypes from 'prop-types';

function PetShop({ dogs, cats, customers, customerName, onClick, status }) {
  return (
    <div>
      <h1>PetShop</h1>
      <h2>Dogs: {dogs}</h2>
      <h2>Cats: {cats}</h2>
      <p>Quantidade de clientes: {customers.join(', ')}</p>
      <p>Nome do cliente: {customerName}</p>
      <p>Status: {status}</p>
      <button type="button" onClick={onClick}>Iniciar banho</button>
    </div>
  )
}

PetShop.defaultProps = {
  cats: 0,
  customers: []
}

PetShop.propTypes = {
  dogs: PropTypes.number.isRequired,
  cats: PropTypes.number,
  customers: PropTypes.array,
  customerName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOf(["Completo", "Em curso", "Desabilitado"])
}

export default PetShop;