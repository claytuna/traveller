var SkillService = require("services/SkillService");

var Card = require('components/display/Card');

module.exports = (props) => {
	var skills = props.data && props.data.tradeCodes ? SkillService.getBackgroundSkills( _.map(props.data.tradeCodes, (o)=> o.values.code ) ) : undefined;
	return (
		<Row>
			<Col xs={12}>
				<p>Skills available for current homeworld</p>
				<Row>
					<Col xs={12}>
					{ skills && skills.worldSkills && <Card secondary title="World/Trade Skills" body={ <Row>{_.map(skills.worldSkills, (tr, id)=><Col xs={6} md={4} key={"bg-skil-"+id} title={tr.desc}>{tr.name}</Col> )}</Row>} /> }
					{ skills && skills.educationSkills && <Card secondary title="General Education Skills" body={ <Row>{_.map(skills.educationSkills, (tr, id)=><Col xs={6} md={4} key={"bg-skil-"+id} title={tr.desc}>{tr.name}</Col> )}</Row>} /> }
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
