import React, { useContext } from 'react';
import { ThemeContext } from '../Theme';

function Form() {
  const context = useContext(ThemeContext);

  const renderForm = (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="name">Nome:</label>
      <input type="text" placeholder="Maria de Souza" title="name" id="name" name="name" />

      <label htmlFor="email">E-mail:</label>
      <input type="email" placeholder="mariasouza@gmail.com" title="E-mail" id="email" name="email" />

      <label htmlFor="age">Idade:</label>
      <input type="number" placeholder="30" title="Idade" id="age" name="age" />

      <label htmlFor="tel">Telefone:</label>
      <input type="tel" placeholder="+5511999999999" title="Telefone" id="tel" name="tel" />
    </form>
  );

  const renderNotLogged = (
    <h1> É necessário realizar o login</h1>
  )

  return (
    <div>
      {context.token ? renderForm : renderNotLogged}
    </div>
  )
}

export default Form;