require("./Btn.less");

module.exports = (props) => {
	var filterProps = _.omit(props, ['text', 'type']);
	return (<button className={`btn btn--${props.type || "primary"}`} {...filterProps}>{ props.text || 'Click here' }</button>);
};
