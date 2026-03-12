import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
