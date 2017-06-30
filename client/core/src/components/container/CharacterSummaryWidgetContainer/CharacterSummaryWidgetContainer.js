var CharacterSummaryWidget = require('components/display/CharacterSummaryWidget');
var ContainerTitle = require("components/display/ContainerTitle");
var Loading = require("components/display/Loading");

module.exports = props => {
		return (
				<div>
					{ props.character ? <CharacterSummaryWidget data={props.character}/> : <Loading/> }
					<ContainerTitle text="Character Summary" />
				</div>
		);
};
