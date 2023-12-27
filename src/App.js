import './App.css';
import Header from './Header.js';
import Left__side from './Left-side.js';
import Right__side from './Right-side.js';
import Under__header from './Under-header.js';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="app__wrapper">
    <Header/>
    <Under__header/>
    <Left__side />
    <Right__side/>
    </div>
  );
}

export default App;
