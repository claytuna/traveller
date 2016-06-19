var CharacterService = require('services/CharacterService');

var CharacterSummaryWidget = require('components/display/CharacterSummaryWidget');
var ContainerTitle = require("components/display/ContainerTitle");
var Loading = require("components/display/Loading");

module.exports = class CharacterSummaryWidgetContainer extends Core {
	constructor() {
		super();
		this.state = { charData: undefined };
	}

	componentWillMount(){
		this.registerStoreKey('character.data', 'charData');
	}

	render(){
		return (
				<div>
					{ this.state.charData ? <CharacterSummaryWidget data={this.state.charData}/> : <Loading/> }
					<ContainerTitle text="Character Summary" />
				</div>
		);
	}
};
