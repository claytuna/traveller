var Card = require('components/display/Card');
var DatumGroup = require("components/display/DatumGroup");

module.exports = class CharacterSummaryWidget extends CorePure {
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
						{ data.stats && statsDisplay(data.stats) }
					</Row>
				}
				footer={<p>Show history...</p>}	/>
		);

		function statsDisplay(stats){
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
	}
};
