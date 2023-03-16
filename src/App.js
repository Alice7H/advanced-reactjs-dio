import React, { Fragment } from 'react';

const store = ['', '', ''];

function Column() {
  return (
    <tr>
      <td>Tênis</td>
      <td>Camisa</td>
    </tr>
  )
}

function App() {
  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column />
    </Fragment>
  )

  return (
    <table>
      <thead>
        <tr><td>Roupas</td></tr>
      </thead>
      <tbody>
        {store.map(renderColumns)}
      </tbody>
    </table>
  );
}

export default App;