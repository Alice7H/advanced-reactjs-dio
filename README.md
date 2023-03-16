# Práticas avançadas com ReactJS

Ministrado por Bruno Carneiro

Este projeto foi construído com [Create React App](https://github.com/facebook/create-react-app).

## Para rodar a aplicação

Para rodar a aplicação em modo de desenvolvimento use o comando `npm start` e informe [http://localhost:3000](http://localhost:3000) para vê-lo em seu navegador.

A página recarregará automaticamente a medida que você fizer suas modificações.

## Ciclo de vida e suas fases

- componenteDidMount:

  É invocado imediatamente após um componente ser montado.

  Se precisar carregar data de um endpoint remoto, este é um bom lugar para instanciar sua requisição ou para colocar qualquer subscrição. Se fizer isto, não esqueça de desinscrever depois.

- componenteDidUpdate => o vídeo não exibe

  É invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.

  Use isto como uma oportunidade para alterar o DOM quando o componente for atualizado. Este também é um bom lugar para realizar requisições de rede enquanto compara as props atuais com as props anteriores.

- componenteWillUnmount:

  É invocado imediatamente antes que um componente seja desmontado e destruído.

  Qualquer limpeza necessária deve ser realizada neste método, como invalidar timers, cancelar requisições de rede, ou limpar qualquer subscrição que foi criada

- shouldComponentUpdate:

  Este método faz com que o componente seja renderizado novamente apenas quando houver uma mudança no estado ou nos suportes de um componente e essa mudança afetará a saída.

  Ele é chamado antes de renderizar um componente já montado quando novos adereços ou estados estão sendo recebidos.

  Se ele retornar falso, os métodos render(), componentWillUpdate() e componentDidUpdate() não são chamados.

  Este método existe somente para otimização de performance.

## Hooks

- useState
- useEffect

## Memo

Permite que você pule a renderização de um componente quando seus props estão inalterados.

Podemos especificar uma função de comparação personalizada, ignorar a re-renderização quando os adereços estão inalterados, atualizar um componente memorizado usando contexto ou estado.

## Aprenda mais

Você pode aprender mais com a [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, veja a [documentação do React](https://reactjs.org/).
