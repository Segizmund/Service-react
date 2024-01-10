import Card__technology from './Card-technology.js';

function Left__side() {

  let CardTitle = [{
    id: 1,
    Title: 'MelGU-0001',
    Status: 'Формирование',
    DateSupply: '12.12.2023',
    StatusSupply: 'Не подана'
  }];

  let CardElements = CardTitle
    .map(Card => <Card__technology
      id={Card.id} 
      Title={Card.Title} 
      Status={Card.Status}
      DateSupply={Card.DateSupply}
      StatusSupply ={Card.StatusSupply}/>);

  return (
    <div className="Left__side">
    <div>
      <span className="Title__category">Ваши технологии</span>
    </div>
      {CardElements}
    </div>);
}

export default Left__side;