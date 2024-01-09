import Card__technology from './Card-technology.js';

function Left__side() {
  return (
    <div className="Left__side">
    <div>
      <span className="Title__category">Ваши технологии</span>
    </div>
      <Card__technology 
      Title="MelGU-0001" 
      Status="Формирование" 
      DateSupply="12.12.2023"
      StatusSupply ="Не подана"/>
    </div>
  );
}

export default Left__side;