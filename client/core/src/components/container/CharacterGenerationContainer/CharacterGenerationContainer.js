var CharacterService = require("services/CharacterService");

var WorldGeneratorWidgetContainer = require('components/container/WorldGeneratorWidgetContainer');
var StatsWidgetContainer = require('components/container/StatsWidgetContainer');

var ContainerTitle = require("components/display/ContainerTitle");
var BtnGroup = require("components/display/BtnGroup");
var Btn = require("components/display/Btn");
var TextField = require("components/display/TextField");
var Loading = require("components/display/Loading");
var Step = require("components/display/Step");
import { Component } from "react";

class CharacterGenerationContainer extends Component {

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
			let forms = this.props.forms;
			//console.log(character)
			/*if(character.name === false){
				return <Step title="To begin, choose your character name:"
					content={<div>
						<TextField formName="characterNameForm" fieldName="name" placeholder="Character name" onUpdate={ (f1,f2,v)=>{dispatch(actions.updateForm(f1,f2,v))} }/>
						<Btn text="Accept name" onClick={ ()=>{ dispatch(actions.updateCharacterName(forms.characterNameForm.name)) } }/>
						</div>} />
			}

			if(character.stats === false){
				return <Step title="1. Roll for characteristics" subtitle="Select a dice rolling option and roll for stats"
					content={<StatsWidgetContainer {...this.props}/>}/>;
			}*/

			if(character.homeworld === false){
				return <Step title="2.(a) Choose a homeworld" subtitle="Generate and accept your homeworld below"
					content={<WorldGeneratorWidgetContainer onUpdate={(w)=>dispatch(actions.updateHomeworld(w))}/>}/>;
			}

			if(character.backgroundSkills.length === 0){
				return <Step title="2.(b) Select background skills" subtitle="Select skills from the list below. (Based on your EDU modifier and homeworld selection)"
					content={gs.call(this)}/>;
			}

			return <div>COMPLETE</div>;

		}
	}
};

var SkillBtn = require("components/display/SkillBtn");

function gs(){
		return (
			<SkillBtn />
		);
}

module.exports = CharacterGenerationContainer;
