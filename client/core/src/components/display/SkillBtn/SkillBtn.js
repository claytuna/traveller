var DatumGroup = require("components/display/DatumGroup");
require("./SkillBtn.less");

module.exports = props => {
	var filterProps = _.omit(props, ['value', 'type']);

	return (
		<button
			className="btn btn--skill"
			{...filterProps}
			onClick={ ()=>{props.onUpdate && props.onUpdate(props.skill, props.value)} }>
			{ props.skill }
			{ props.value }
		</button>
	);
};
