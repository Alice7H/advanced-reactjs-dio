import React, { Fragment } from 'react';

const store = [
  { type: 'Camisa' },
  { type: 'Meia' },
  { type: 'Tênis' }
];

function Column({ type }) {
  return (
    <tr>
      <td>{type.name.console}</td>
    </tr>
  )
}

function App() {
  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
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