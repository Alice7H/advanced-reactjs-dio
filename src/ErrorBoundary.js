import { Component } from 'react';
import ErrorImg from './error.jpg';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('error:', error);
    console.log('errorInfo: ', errorInfo);
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 style={{ textAlign: 'center' }}>Página não encontrada</h1>
          <img src={ErrorImg} alt="Erro" style={{ objectFit: "cover", width: "100vw", height: "100vh" }} />
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;