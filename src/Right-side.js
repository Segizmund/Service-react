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
      <NavLink to="/Gninfo"  className="General__btn"><span>Общая информация</span></NavLink>
      <NavLink to="/Frminfo" className="Techno__btn"><span>Формы технологий</span></NavLink>
    </div>
    <div className="Right__content">
    <Routes>
      <Route index element={<General__information/>} />
      <Route path="/Gninfo" element={<General__information/>} />
      <Route path="/Frminfo" element={<Form__technology/>} />
    </Routes>
    </div>
    </div>
  );
}

export default Right__side;