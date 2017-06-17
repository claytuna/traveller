var Card = require('components/display/Card');
var DatumGroup = require("components/display/DatumGroup");
var React = require("react");

class CharacterSummaryWidget extends React.Component {
	render(){
		var data = this.props.data;
		return (
			<Card
				title={<p>Character Summary:</p>}
				body={
					<Row>
						<Col xs={12}>
							<DatumGroup title="Name" value={data.name} />
						</Col>
						{ data.stats && showStats(data.stats) }
						{ data.homeworld && showHomeworld(data.homeworld) }
					</Row>
				}
				footer={<p>Show history...</p>}	/>
		);

		function showStats(stats){
			return (
				<Col xs={12}>
					<Card title="Characteristics" secondary
						body={
							<Row>
								{ _.map(stats, (obj, idx) => <Col xs={6} lg={4} key={'roll-' + idx}><DatumGroup title={idx} value={obj.value + ' (' + obj.modifier + ')'} /></Col>) }
							</Row>
						}/>
				</Col>
			);
		}

		function showHomeworld(homeworld){
			return (
				<Col xs={12}>
					<Card title="Homeworld" secondary
						body={
							<Row>
								<Col xs={12}>
									<DatumGroup title="UWP" value={homeworld.uwp} />
									<DatumGroup title="Starport" value={homeworld.starport.name} />
								</Col>
							</Row>
						}/>
				</Col>
			);
		}

	}
};

module.exports = CharacterSummaryWidget;
