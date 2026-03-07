import React from 'react';
import ReactDOM from 'react-dom/client';
import './oasis-rex.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

const root = document.getElementById('root');
if (!root) {
  console.error('Root element #root not found');
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
