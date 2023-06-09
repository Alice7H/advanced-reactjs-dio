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

## Context API

É uma maneira de passar dados pela árvore de componentes se ter que passar props manualmente em todos os níveis.

O Context foi projetado para compartilhar dados que podem ser considerados “globais”, como o usuário autenticado atual, tema ou idioma preferido.

Aplique-o com moderação porque dificulta a reutilização de componentes.

## Fragments

Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os fragmentos permitem agrupar uma lisa de filhos sem adicionar nós extras ao DOM.

## Error Boundaries

Um erro de JavaScript em uma parte da UI não deve quebrar toda a aplicação. Para resolver este problema para usuários do React, a partir do React 16, introduziu-se um novo conceito de `error boundary`.

Error boundaries não capturam erros em manipuladores de evento, código assíncrono, renderizações no servidor e erros lançados na própria error boundary.

## Render props

Refere-se a uma técnica de compartilhar código entre componentes React passando uma prop cujo valor é uma função.

Um componente com uma render prop recebe uma função que retorna um elemento React e a invoca no momento de renderização, não sendo necessário para o componente implementar uma lógica própria.

## Typechecking com propTypes

Na medida em que sua aplicação cresce, você pode capturar muitos bugs com checagem de tipos. Em algumas aplicações, você pode usar extensões do JavaScript como Flow ou Typescript para checar os tipos de toda a sua aplicação. Porém, mesmo se você não usá-las, React possui algumas habilidades de `checagem de tipos` nativos.

## Refs e DOM

Refs são uma abreviação (definida como qualquer valor que não acione uma nova renderização do componente quando for alterado), usado para acessar,interagir com nós React DOM ou elementos React e para alterar o valor de um componente filho, sem usar adereços. Também usado para armazenar uma referência a determinados nós DOM e/ou elementos React.

Usado em manipulação de biblioteca de terceiros e em retornos de chamada, gerenciamento de inputs (foco), seleção de textos ou reprodução de mídias, animações imperativas.

Seu uso deve ser evitado para ações declarativas e para fins de uso excessivo.

Uma referência pode ser criada de duas maneiras: pelo gancho `useRef` ou pela função `createRef`.

O `useRef` é um hook que usa a mesma ref o tempo todo. Ele persiste a referência existente entre as novas renderizações.

O `createRef` é uma função que cria uma nova referência toda vez, ou seja, não persiste a referência existente entre as novas renderizações.

## Dumb Components

São os componentes que se preocupam apenas com apresentação; recebem valores via props; não possuem dependências com o restante da aplicação; não especificam como os dados são carregados ou sofrem mutação, recebem valores e callbacks exclusivamente via props. Raramente possuem estado, quando precisam é para controlar a interface e não dados do usuário; são escrito na maioria das vezes como componentes funcionais.

Exemplos: Button, Card, Sidebar, Footer, List, Menu.

## Smart Components

Preocupam-se como as coisas vão funcionar, podem conter smart e dumb components, providenciam dados e padrões de apresentação ou outros containers. Na maioria dos casos, possuem estado e podem chamar outros fluxos do sistema.

Exemplos: UserGallery, UserPage, FilterBook, FollowersSidebar, ListCards.

## Organização de Projeto

Um exemplo de estrutura de projeto pode ser:

- App: contém rotas, providers, fluxos de autenticação, validação, conteúdos globais.
- containers: contém páginas como User, Store, Bank.
- components: componentes smart e dumb
  - index: import de todos os components
  - Button
    - index
    - styles
  - Card
    - index
    - styles
- assets: contém imagens e estilos globais
  - styles
  - imgs
- commons
  - utils: arquivos de utilitários com tratamentos com string, remoção de espaço, funções com validações.
  - contants: expressões para representar vários tipos de valores.
  - i18n: internacionalização.
- routes: rotas do sistema.
- resources: chamadas de serviços, apis

## Aprenda mais

Você pode aprender mais com a [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, veja a [documentação do React](https://reactjs.org/).
