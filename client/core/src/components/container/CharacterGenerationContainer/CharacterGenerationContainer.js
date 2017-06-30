var StatsWidgetContainer = require('components/container/StatsWidgetContainer');
var WorldGeneratorWidgetContainer = require('components/container/WorldGeneratorWidgetContainer');
var BackgroundSkillSelectionContainer = require('components/container/BackgroundSkillSelectionContainer');

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
			console.log(character)
			/*if(character.name === false){
				return <Step title="To begin, choose your character name:"
					content={<div>
						<TextField formName="characterNameForm" fieldName="name" placeholder="Character name" onUpdate={ (f1,f2,v)=>{dispatch(actions.updateForm(f1,f2,v))} }/>
						<Btn text="Accept name" onClick={ ()=>{ dispatch(actions.updateCharacterName(forms.characterNameForm.name)) } }/>
						</div>} />
			}*/

			if(character.stats === false){
				return <Step title="1. Roll for characteristics" subtitle="Select a dice rolling option and roll for stats"
					content={<StatsWidgetContainer {...this.props}/>}/>;
			}

			if(character.homeworld === false){
				return (
					<Step title="2.(a) Choose a homeworld"
						subtitle="Generate and accept your homeworld below"
						content={<WorldGeneratorWidgetContainer onUpdate={ (w)=>dispatch(actions.updateHomeworld(w)) }/>}/>
				);
			}

			if(character.backgroundSkillCount !== true){
				return (
					<Step title="2.(b) Select background skills"
						subtitle="Select skills from the list below. (Based on your EDU modifier and homeworld selection)"
						content={<BackgroundSkillSelectionContainer
							skillPoints={character.backgroundSkillCount}
							characterSkills={character.skills}
							world={character.homeworld}
							incrementBackgroundSkill={()=>dispatch(actions.setBackgroundSkillCount(character.backgroundSkillCount + 1))}
							decrementBackgroundSkill={()=>dispatch(actions.setBackgroundSkillCount(character.backgroundSkillCount - 1))}
							onIncrement={ (w)=>dispatch(actions.incrementSkill(w)) }
							onDecrement={ (w)=>dispatch(actions.decrementSkill(w)) }
							onUpdate={ ()=>dispatch(actions.setBackgroundSkillCount(true)) } />}/>
				);
			}

			return <div>COMPLETE</div>;

		}
	}
};

module.exports = CharacterGenerationContainer;
