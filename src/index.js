import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";
const root = ReactDOM.createRoot(document.body);
let CardTitle = [{
  id: 1,
  Title: 'MelGU-0001',
  Status: 'Формирование',
  DateSupply: '12.12.2023',
  StatusSupply: 'Не подана'
}];
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App CardTitle={CardTitle} />
  </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();