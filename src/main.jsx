import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Desafio from './Desafio.jsx';
import AntDS from './AntDS.jsx';
import App from './App.jsx';
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Desafio /> */}
    {/* <AntDS /> */}
    <App />
  </StrictMode>
);
