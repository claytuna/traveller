var TravellerWorldService = require('services/TravellerWorldService');
var CharacterService = require("services/CharacterService");

var WorldSummaryTraveller = require('components/display/WorldSummaryTraveller');
var WorldGeneratorTravellerWidget = require('components/display/WorldGeneratorTravellerWidget');
var ContainerTitle = require("components/display/ContainerTitle");
var BtnGroup = require("components/display/BtnGroup");
var Btn = require("components/display/Btn");
var Card = require('components/display/Card');

module.exports = class WorldGeneratorWidgetContainer extends Core {
	constructor() {
		super();
		this.state = { world: undefined };
	}

	componentWillMount(){
		this.registerStoreKey('world.data', 'world');
	}

	generate(){
		TravellerWorldService.generate();
	}

	accept(){
		CharacterService.setHomeworld( this.state.world );
	}

	render(){
		return (
				<div>
					<Card title="Homeworld"
						body={
							this.state.world ? <WorldSummaryTraveller data={ this.state.world }/> : <p>Generate world below</p>
						}
						footer={
							<BtnGroup>
								<Btn type="tertiary" text="Generate New World" onClick={ this.generate }/>
								{ this.state.world && <Btn type="secondary" text="Accept World" onClick={ this.accept.bind(this) }/> }
							</BtnGroup>
						}/>
					{ this.state.world && <WorldGeneratorTravellerWidget data={ this.state.world }/> }
					<ContainerTitle text="World Generator (Traveller)" />
				</div>
		);
	}
};
