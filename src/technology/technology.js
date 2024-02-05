import Info__technology from "./Info-technology";

function Technology() {
    return(
        <div className="Tech__wrapp">
            <Info__technology/>
            <div className="Request__tech">
                <h3>Запрос</h3>
               <div className="Checkbox__wrapp">
               <div>
                    <input type="checkbox" id="Req1" name="Req1"/>
                    <label for="Req1">Запрос подается в ответ на предложение</label>
                </div>
                <div>
                    <input type="checkbox" id="Req2" name="Req2"/>
                    <label for="Req2">Запрос подается от ЦТТ - владельца категории</label>
                </div>
               </div> 
            </div>
            <div className="Info__org">
                <div className="Input__text">
                    <label for="Titleorg">Наименование организации</label>
                    <input required type="text" id="Titleorg" name="Ttitleorg"/>
                </div>
            </div>
        </div>
    );
}

export default Technology;