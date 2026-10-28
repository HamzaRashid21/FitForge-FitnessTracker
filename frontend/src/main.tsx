import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.js';
import './styles/global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to locate the root element in the document.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
