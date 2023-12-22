import './App.css';
import Header from './Header.js';
import Left__side from './Left__side.js';
import Right__side from './Right__side.js';
import Under__header from './Under__header.js';
function App() {
  return (
    <div className="app__wrapper">
    <Header/>
    <Under__header/>
    <Left__side/>
    <Right__side/>
    </div>
  );
}

export default App;