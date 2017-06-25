var DatumGroup = require("components/display/DatumGroup");
require("./SkillBtn.less");

const SkillBtn = props => {
	return (
		<div className="skill-btn">
			{ props.onDecrement && getBtn(props.onDecrement, props.skillKey, props.value, false, props.disabled, props.max, props.min) }
			<DatumGroup title={props.skill} value={props.value}/>
			{ props.onIncrement && getBtn(props.onIncrement, props.skillKey, props.value, true, props.disabled, props.max, props.min) }
		</div>
	);
};

function getBtn(update, skillKey, value, isIncrement, disabled, max, min) {
	return (
		<button
			disabled={disabled || testMinMax()}
			className="btn btn--skill"
			onClick={ ()=>{ update(skillKey, value)} }>
			{ isIncrement ? '+' : '-' }
		</button>
	);

	function testMinMax(){
		if( typeof max === 'number' && isIncrement && value >= max ) return true;
		if( typeof min === 'number' && !isIncrement && value <= min ) return true;
		return false;
	}
}

module.exports = SkillBtn;
