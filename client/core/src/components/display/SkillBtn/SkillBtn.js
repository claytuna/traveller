var DatumGroup = require("components/display/DatumGroup");
require("./SkillBtn.less");

const SkillBtn = props => {
	return (
		<div>
			{ props.onDecrement && getBtn(props.onDecrement, props.skill, props.value, '-') }
			<DatumGroup title={props.skill} value={props.value}/>
			{ props.onIncrement && getBtn(props.onIncrement, props.skill, props.value, '+') }
		</div>
	);
};

function getBtn(update, skill, value, symbol) {
	return (
		<button
			className="btn btn--skill"
			onClick={ ()=>{ update(skill, value)} }>
			{ symbol }
		</button>
	);
}

module.exports = SkillBtn;
