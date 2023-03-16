import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

const main = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(main);
