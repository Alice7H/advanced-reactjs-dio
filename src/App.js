import React, { Component } from 'react';
import Twitter from './components/Twitter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      actived: true,

    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true });
    }, 2000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render() {
    const posts = [
      {
        title: 'test',
        description: 'foo'
      },
      {
        title: 'test2',
        description: 'foo2'
      }
    ];

    return (
      <>
        <button type="button" onClick={this.onRemove}>Remove componente</button>
        {
          this.state.actived && <Twitter posts={posts} loading={this.state.loading} />
        }
      </>
    );
  }
}

export default App;