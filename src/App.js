import './App.css';
import Header from './header/Header.js';
import Left__side from './left-side/Left-side.js';
import Right__side from './right-side/Right-side.js';
import Under__header from './header/Under-header.js';
import {
  Route,
  Routes
} from "react-router-dom"

function App(props) {
  return (
    <div className="app__wrapper">
    <Header/>
    <Under__header/>
  <Left__side CardDescrip={props.state.Left_card} />
    <Right__side/>
    </div>
  );
}

export default App;