import General__information from './General-information.js';
import Form__technology from './Form-technology.js';
import {
  Route,
  Routes,
  Link,
  NavLink
} from "react-router-dom"

function Right__side() {
  return (
    <div className="Right__side">
    <div className="Right__sidebtn">
      <NavLink to="/description/Gninfo"  className="General__btn"><span>Общая информация</span></NavLink>
      <NavLink to="/description/Frminfo" className="Techno__btn"><span>Формы технологий</span></NavLink>
    </div>
    <div className="Right__content">
    <Routes>
     
      <Route path="/description" element={<General__information/>} />
      <Route path="/description/Gninfo" element={<General__information/>} />
      <Route path="Frminfo" element={<Form__technology/>} />
  
    </Routes>
    </div>
    </div>
  );
}

export default Right__side;