import './App.css';
import Header from './header/Header.js';
import Left__side from './left-side/Left-side.js';
import Right__side from './right-side/Right-side.js';
import Under__header from './header/Under-header.js';
import Description from './description/description.js';
import Technology from './technology/technology.js';
import {
  Route,
  Routes
} from "react-router-dom"

function App(props) {
  return (
    <div className="app__wrapper">
    <Header/>
    <Under__header/>
    {/*<Left__side CardDescrip={props.state.Left_card} />
    <Right__side/>*/}
    <Routes>
    {/*<Route path="/description">
    <Route index element={<Description CardDescrip={props.state}/>} />
    <Route path="Gninfo" element={<Description CardDescrip={props.state}/>} />
    <Route path="Frminfo" element={<Description CardDescrip={props.state}/>} />
    </Route>*/}
    <Route path="/technology" element={<Technology/>}/>
    </Routes>

    </div>
  );
}

export default App;