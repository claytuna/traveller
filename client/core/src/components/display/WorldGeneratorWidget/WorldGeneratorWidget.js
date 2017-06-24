var Btn = require('components/display/Btn');
var Card = require('components/display/Card');
var DatumGroup = require("components/display/DatumGroup");
var WorldDiagram = require("components/display/WorldDiagram");

const WorldGeneratorWidget = props => {
	var data = props.data;
	return (
	<Card
		title={<p>World Generator:</p>}
		body={
			<Row>
				<Col xs={12}>
					<Row>
					<Col xs={6}>
						<DatumGroup title="Name" value={data.name} />
						<DatumGroup title="Population Level" value={data.population.name} comma/>
						<DatumGroup title="Population" value={data.population.value} comma/>
						<DatumGroup title="Technology Level" value={data.technologyLevels[0].desc} />
						<DatumGroup title="Government/Law" value={data.governments[0].name + ' - ' + data.governments[0].desc} />
					</Col>
					<Col xs={6}>
						<DatumGroup title="Size" value={data.size.name + ' - ' + data.size.desc} />
						<DatumGroup title="Diameter (km)" value={data.size.value} comma/>
						<DatumGroup title="Atmosphere" value={data.atmosphere.children[0].name + ' - ' + data.atmosphere.children[0].desc} />
						<DatumGroup title="Hydrosphere" value={data.hydrosphere.name + ' - ' + data.hydrosphere.desc} />
					</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<WorldDiagram {...data}/>
						</Col>
					</Row>
				</Col>
			</Row>
		}	/>
	);
};

module.exports = WorldGeneratorWidget;
