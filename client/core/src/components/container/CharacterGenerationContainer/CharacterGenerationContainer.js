var CharacterService = require("services/CharacterService");

var WorldGeneratorWidgetContainer = require('components/container/WorldGeneratorWidgetContainer');
var StatsWidgetContainer = require('components/container/StatsWidgetContainer');

var ContainerTitle = require("components/display/ContainerTitle");
var BtnGroup = require("components/display/BtnGroup");
var Btn = require("components/display/Btn");
var TextField = require("components/display/TextField");
var Loading = require("components/display/Loading");
var Step = require("components/display/Step");

module.exports = class CharacterGenerationContainer extends Core {
	constructor() {
		super();
		this.state = { data:{name: undefined} };
	}

	componentWillMount(){
		this.registerStoreKey('character.data', 'data');
	}

	componentDidMount(){
		CharacterService.start();
	}

	render(){
		return (
				<Row>
					<Col xs={12}>
						{ this.state.data ? characterTree.call(this) : <Loading/> }
					</Col>
				</Row>
		);

		function characterTree(){
			var data = this.state.data;

			/*if(!data.name){
				return <Step title="To begin, choose your character name:"
					content={<div><TextField rsKey="characterName" placeholder="Character name"/> <Btn text="Accept name" onClick={ ()=>{ CharacterService.setName(RS.get('characterName')) } }/></div>} />
			}*/

			if(!data.stats){
				return <Step title="1. Roll for characteristics" subtitle="Select a dice rolling option and roll for stats"
					content={<StatsWidgetContainer/>}/>;
			}

			if(!data.homeworld){
				return <Step title="2.(a) Choose a homeworld" subtitle="Generate and accept your homeworld below"
					content={<WorldGeneratorWidgetContainer/>}/>;
			}

			if(!data.background){
				return <Step title="2.(b) Select background skills" subtitle="Select skills from the list below. (Based on your EDU modifier and homeworld selection)"
					content={<WorldGeneratorWidgetContainer/>}/>;
			}

			return <div>COMPLETE</div>;

		}
	}
};
