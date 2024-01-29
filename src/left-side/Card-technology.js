function Card__technology(props) {
	return (
		<div className="Card__technology">
			<div className="Title__card">
			<span className="Title__technology">{props.Title}</span>
				<span className="Status">{props.Status}</span>
			</div>
			<div className="Card__container">
				<div className="Info__Supply">
					<span>Дата создания</span>
					<span className="Date__supply">{props.DateSupply}</span>
					<span>Дата подачи</span>
	<span className="Status__supply">{props.StatusSupply}</span>
				</div>
				<div className="About__technology">
					<span>Форма технологии</span>
					<span>Запрос</span>
				</div>
			</div>
		</div>
	);
}

export default Card__technology;