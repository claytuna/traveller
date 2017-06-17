var CharacterService = require('services/CharacterService');

var CharacterSummaryWidget = require('components/display/CharacterSummaryWidget');
var ContainerTitle = require("components/display/ContainerTitle");
var Loading = require("components/display/Loading");

module.exports = class CharacterSummaryWidgetContainer extends Core {
	render(){
		return (
				<div>
					{ this.props.character ? <CharacterSummaryWidget data={this.props.character}/> : <Loading/> }
					<ContainerTitle text="Character Summary" />
				</div>
		);
	}
};
