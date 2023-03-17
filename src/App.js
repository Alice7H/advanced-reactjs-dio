import React from 'react';
import Exercise from './components/Exercise';

function App() {
  const handleClick = () => {
    console.log('Informações confirmadas');
  }

  const objAddress = {
    cep: "18108808",
    state: "SP",
    city: "Sorocaba",
    street: "Rua Antonio de Deus Pires",
    district: "Inhayba",
    number: 15
  }

  return (
    <Exercise
      onClick={handleClick}
      subjects={['Math', 'Portuguese', 'History']}
      isRegistered={true}
      address={objAddress}
      name="Haley"
      age={27}
    />
  );
}

export default App;