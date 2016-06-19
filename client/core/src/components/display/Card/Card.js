require("./Card.less");

module.exports = (props) => {
	return (
	<div className={props.secondary ? "card card--secondary" :"card"}>
		{ props.title && <div className="card__title">{props.title}</div>}
		{ props.body && <div className="card__body">{props.body}</div>}
		{ props.footer && <div className="card__footer">{props.footer}</div>}
	</div>
	);
};
