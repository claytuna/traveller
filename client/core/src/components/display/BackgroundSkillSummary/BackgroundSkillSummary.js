var SkillService = require("services/SkillService");

var Card = require('components/display/Card');
var SkillBtn = require('components/display/SkillBtn');

const BackgroundSkillSummary = props => {
	var characterSkills = props.characterSkills;
	var skills = props.data && props.data.tradeCodes ? SkillService.getBackgroundSkills( _.map(props.data.tradeCodes, (o)=> o.values.code ) ) : undefined;
	return (
		<Row>
			<Col xs={12}>
				<p>{ props.isEditable ? 'Skills remaining: ' + props.skillPoints  : 'Skills available for current homeworld:' }</p>
				<Row>
					<Col xs={12}>
					{
						skills && skills.worldSkills && <Card secondary title="Available Background Skills"
						body={
							_.size(skills.worldSkills) > 0 ?
							<Row>
							{
								_.map(
									skills.worldSkills,
									(sk, idx)=>{ return (
										<Col xs={6} lg={4} key={"bg-skil-"+idx} title={sk.desc}>
											{
												props.isEditable ?
												<SkillBtn
													disabled={props.disabled}
													skill={sk.name}
													skillKey={idx}
													min={0}
													onIncrement={(d)=>{props.onIncrement(d)} }
													onDecrement={(d)=>{props.onDecrement(d)} }
													value={returnSkillQty(characterSkills, idx)}/> :
												sk.name
											}
										</Col>
									) }
								)
							}
							</Row> :
							<p>No background skills available for this homeworld.</p>
						} />
					}
					{
						skills && skills.educationSkills && <Card secondary title="General Education Skills"
						body={
							<Row>
							{
								_.map(
									skills.educationSkills,
									(sk, idx)=><Col xs={6} lg={4} key={"bg-skil-"+idx} title={sk.desc}>
									{
										props.isEditable ?
										<SkillBtn
											disabled={props.disabled}
											skill={sk.name}
											skillKey={idx}
											min={0}
											onIncrement={(d)=>{props.onIncrement(d)} }
											onDecrement={(d)=>{props.onDecrement(d)} }
											value={returnSkillQty(characterSkills, idx)}/> :
										sk.name
									}
									</Col>
								)
							}
							</Row>
						} />
					}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

function returnSkillQty(characterSkills, skillKey){
	if(characterSkills && characterSkills[skillKey] && characterSkills[skillKey].qty) {
		return characterSkills[skillKey].qty;
	} else {
		return 0;
	};
}

module.exports = BackgroundSkillSummary;
