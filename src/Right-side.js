import General__information from './General-information.js';
import Form__technology from './Form-technology.js';
import {
  Route,
  Routes,
  Link
} from "react-router-dom"

function Right__side() {
  return (
    <div className="Right__side">
    <div className="Right__sidebtn">
      <Link to="/Gninfo" className="General__btn Active"><a>Общая информация</a></Link>
      <Link to="/Frminfo" className="Techno__btn"><a>Формы технологий</a></Link>
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