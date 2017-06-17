var CharacterService = require("services/CharacterService");

var WorldGeneratorWidgetContainer = require('components/container/WorldGeneratorWidgetContainer');
var StatsWidgetContainer = require('components/container/StatsWidgetContainer');

var ContainerTitle = require("components/display/ContainerTitle");
var BtnGroup = require("components/display/BtnGroup");
var Btn = require("components/display/Btn");
var TextField = require("components/display/TextField");
var Loading = require("components/display/Loading");
var Step = require("components/display/Step");

class CharacterGenerationContainer extends Core {
	constructor() {
		super();
		this.state = { data:{name: undefined} };
	}

	componentWillMount(){
		this.registerStoreKey('character.data', 'data');
	}

	render(){
		return (
				<Row>
					<Col xs={12}>
						{ this.props.character ? characterTree.call(this, this.props.character) : <Loading/> }
					</Col>
				</Row>
		);

		function characterTree(character){
			let actions = this.props.actions;
			let dispatch = this.props.dispatch;
			//console.log(character)
			if(character.name === false){
				return <Step title="To begin, choose your character name:"
					content={<div><TextField rsKey="characterName" placeholder="Character name"/> <Btn text="Accept name" onClick={ ()=>{ dispatch(actions.updateCharacterName('foo')) } }/></div>} />
			}

			if(character.stats === false){
				return <Step title="1. Roll for characteristics" subtitle="Select a dice rolling option and roll for stats"
					content={<StatsWidgetContainer onUpdate={()=>{dispatch(actions.updateCharacterStats('foo')) }}/>}/>;
			}

			if(character.homeworld === false){
				return <Step title="2.(a) Choose a homeworld" subtitle="Generate and accept your homeworld below"
					content={<WorldGeneratorWidgetContainer onUpdate={dispatch(actions.updateHomeworld('foo'))}/>}/>;
			}

			if(!data.background){
				return <Step title="2.(b) Select background skills" subtitle="Select skills from the list below. (Based on your EDU modifier and homeworld selection)"
					content={<WorldGeneratorWidgetContainer/>}/>;
			}

			return <div>COMPLETE</div>;

		}
	}
};

module.exports = CharacterGenerationContainer;
