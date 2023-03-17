import React, { useState } from 'react';
import Button from './Components/Button';
import Calc from './Components/Calc';
import Table from './Components/Table';

function App() {
  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const max = 30;
  const shoes = ["sapatos", "tênis", "sandálias", "botas", "chinelos"];

  const handleClick = () => {
    console.log('muda valor mínimo');
    const randomNumber = Math.floor(Math.random() * 11);
    setMin(randomNumber);
  }

  const handleCalc = (event) => {
    const val = parseFloat(event.target.value);
    setValue(min + max + val);
  }

  return (
    <div style={{ marginLeft: "10px" }}>
      <div>
        <h1>Valor Calculado: {value}</h1>
        <Calc min={min} max={max} onChange={handleCalc} />
      </div>

      <br />

      <Button
        type="button"
        onClick={handleClick}
        className="btn btn-primary"
      >
        Muda valor mínimo
      </Button>

      <br /><hr /><br />
      <Table title="Calçados" list={shoes} />
    </div>
  );
}

export default App;