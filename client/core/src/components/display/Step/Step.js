require("./Step.less");

module.exports = (props) => {
	return (
		<div className="step">
			<p className="step__title">{ props.title || '' }</p>
			{ props.subtitle && <p className="step__subtitle">{ props.subtitle || '' }</p> }
			{ props.content && props.content }
		</div>
	);
};
