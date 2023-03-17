import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  const inputRef = useRef();
  const valueRef = useRef(1);

  const handleClick = () => inputRef.current.focus();

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      console.log('passou aqui e não re-renderizou')
      valueRef.current = 300;
      console.log(valueRef.current);
    }, 3000)
  }, []);

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <div>
        <h1>Contador: {valueRef.current}</h1>
      </div>
      <br />
      <div>
        <p>Agora: {count}</p>
        <p>Anterior: {prevCountRef.current}</p>
        <button type="button" onClick={increment}>Adiciona 1</button>
        <button type="button" onClick={decrement}>Remove 1</button>
      </div>
      <br />
      <form>
        <label htmlFor="name">Nome: </label>
        <input type="text" id="name" name="name" ref={inputRef} />
        <button onClick={handleClick}>Focar no input</button>
      </form>
    </div>
  );
}

export default App;