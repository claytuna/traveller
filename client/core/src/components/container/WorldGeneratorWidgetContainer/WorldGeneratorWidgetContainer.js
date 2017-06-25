var TravellerWorldService = require('services/TravellerWorldService');
var CharacterService = require("services/CharacterService");

var BackgroundSkillSummary = require('components/display/BackgroundSkillSummary');
var WorldGeneratorTravellerWidget = require('components/display/WorldGeneratorTravellerWidget');
var ContainerTitle = require("components/display/ContainerTitle");
var BtnGroup = require("components/display/BtnGroup");
var Btn = require("components/display/Btn");
var Card = require('components/display/Card');

import { Component } from "react";

class WorldGeneratorWidgetContainer extends Component {
	constructor() {
		super();
		this.state = { world: undefined };
	}

	generate(){
		this.setState({world:TravellerWorldService.generate()});
	}

	accept(){
		//CharacterService.setHomeworld( this.state.world );
		this.props.onUpdate && this.props.onUpdate(this.state.world);
	}

	render(){
		return (
				<div>
					<Card title="Homeworld"
						body={
							this.state.world ?
								<BackgroundSkillSummary
									data={ this.state.world }
									onIncrement={(d)=>{this.props.onIncrement(d)}}
									onDecrement={(d)=>{this.props.onDecrement(d)}}
									characterSkills={this.props.characterSkills}/> :
								<p>Generate world below</p>
						}
						footer={
							<BtnGroup>
								<Btn type="tertiary" text="Generate New World" onClick={ this.generate.bind(this) }/>
								{ this.state.world && <Btn type="secondary" text="Accept World" onClick={ this.accept.bind(this) }/> }
							</BtnGroup>
						}/>
					{ this.state.world && <WorldGeneratorTravellerWidget data={ this.state.world }/> }
					<ContainerTitle text="World Generator (Traveller)" />
				</div>
		);
	}
};

module.exports = WorldGeneratorWidgetContainer;
