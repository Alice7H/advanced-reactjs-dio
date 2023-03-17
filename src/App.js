import React from 'react';
import PetShop from './components/PetShop';

function App() {
  const handleClick = () => {
    console.log('Iniciando o banho...');
  }

  return (
    <PetShop
      dogs={5}
      customerName='Michael Myers'
      customers={['Canela', 'Bella']}
      onClick={handleClick}
      status='Incompleto'
    />
  );
}

export default App;