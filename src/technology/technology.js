import Info__technology from "./Info-technology";

function Technology() {
    return(
        <div className="Tech__wrapp">
            <Info__technology/>
            <div className = "Main__tech">
            <div className = "Request__tech">
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
                <h3>Информация об организации</h3>
                <h4>Описание организации</h4>
                <div className="Input__text">
                    <label for="Titleorg">Наименование организации</label>
                    <input required type="text" id="Titleorg" name="Ttitleorg"/>
                </div>
                <div className="Input__text">
                    <label for="INN">ИНН</label>
                    <input required type="text" id="INN" name="INN"/>
                </div>
                <div className="Select__text">
                    <label for="Region__select">Регион</label>
                    <select required name="Region__select">
                        <option></option>
                    </select>
                </div>
                <div className="Button__modal">
                    <h4>Отраслевая специализация</h4>
                    <button>Добавить</button>
                </div>
                <div className="Button__modal">
                    <h4>Технологическая специализация организации</h4>
                    <button>Добавить</button>
                </div>
            </div>
            <div className="Contact__org">
                <h3>Контактные данные</h3>
                <div className="Input__text">
                    <label for="FIO">ФИО контактного лица</label>
                    <input required type="text" id="FIO" name="FIO"/>
                </div>
                <div className="Input__text">
                    <label for="Job__title">Должность контактного лица</label>
                    <input required type="text" id="Job__title" name="Job__title"/>
                </div>
                <div className="Input__text">
                    <label for="Phone">Телефон</label>
                    <input required type="text" id="Phone" name="Phone"/>
                </div>
                <div className="Input__text">
                    <label for="Email">Email</label>
                    <input required type="email" id="Email" name="Email"/>
                </div>
            </div>
            <div className="Descrip__request">
                <h3>Описание запроса</h3>
            </div>
            </div>
        </div>
    );
}

export default Technology;