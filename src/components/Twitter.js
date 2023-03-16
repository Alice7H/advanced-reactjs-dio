import React, { Component } from 'react';

class Twitter extends Component {

  constructor(props) {
    super(props);
    this.state = { tweet: 'title' };
  }

  componentDidMount() {
    const { posts, loading } = this.props;
    console.log('componentDidMount', posts);
    console.log('componentDidMount', loading);
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props;
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate', loading);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', 'fui removido');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return this.state.tweet !== nextState.tweet; // || nextProps !== this.props.loading;
    return true;
  }

  tweet = () => {
    this.setState({
      tweet: true
    })
  }

  render() {
    const { posts } = this.props;
    console.log('render:', posts);
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        teste
      </div>
    );
  }
}

export default Twitter;