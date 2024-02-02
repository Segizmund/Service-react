function Info__technology(){
    return(
    <div className="Info__tech">
        <div className="Tech__title">
            <h3>Технология № </h3>
        </div>
        <div className="Descrip__tech">
            <div className="Info__Supply">
				<span>Срок подачи</span>
				<span className="Date__supply">02.02.2024{/*props.DateSupply*/}</span>
				<span>Состояние</span>
	            <span className="Status__supply">Формирование{/*props.StatusSupply*/}</span>
                <span>Ответственный</span>
	            <span className="Status__supply">Иванов И.И{/*props.StatusSupply*/}</span>
			</div>
        </div>
    </div>
    );
}

export default Info__technology;