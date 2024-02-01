import Left__side from './left-side/Left-side.js';
import Right__side from './right-side/Right-side.js';

function Description(props){
    debugger;
    return(
    <>
        <Left__side CardDescrip={props.CardDescrip.Left_card} />
        <Right__side/>
    </>
    );
}

export default Description;