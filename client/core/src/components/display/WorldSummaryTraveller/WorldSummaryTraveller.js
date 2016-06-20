var SkillService = require("services/SkillService");

var Card = require('components/display/Card');

module.exports = (props) => {
	var skills = props.data && props.data.tradeCodes ? SkillService.getBackgroundSkills() : undefined;
	return (
		<Row>
			<Col xs={12}>
				<Card title="Skills available for current homeworld"
				body={
					<Row>
						<Col xs={12}>
						<p>Available skills list here</p>
						{ skills && _.map(skills, (tr, id)=><p key={"bg-skil-"+id} title={tr.name}>{tr.desc}</p>) }
						</Col>
					</Row>
				}/>
			</Col>
		</Row>
	);
};
