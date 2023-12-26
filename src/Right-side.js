import General__information from './General-information.js';
import Form__technology from './Form-technology.js';
function Right__side(){
   return (
    <div className="Right__side">
    <div className="Right__sidebtn">
      <span className="General__btn Active">Общая информация</span>
      <span className="Techno__btn">Формы технологий</span>
    </div>
    <div className="Right__content">
      <Form__technology/>
    </div>
    </div>
  );
}

export default Right__side;