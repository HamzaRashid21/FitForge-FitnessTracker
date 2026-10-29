import ReactDOM from 'react-dom/client';
import { App } from './App.js';
import './styles/global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to locate the root element in the document.');
}

// StrictMode is intentionally omitted: the template's jQuery/GSAP scripts must be initialised once per page.
ReactDOM.createRoot(rootElement).render(<App />);
