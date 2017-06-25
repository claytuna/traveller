var BackgroundSkillSummary = require('components/display/BackgroundSkillSummary');
var Card = require('components/display/Card');
var BtnGroup = require("components/display/BtnGroup");
var Btn = require("components/display/Btn");
var ContainerTitle = require("components/display/ContainerTitle");

const BackgroundSkillSelectionContainer = props => {
  return(
    <div>
      <Card
        body={
          <BackgroundSkillSummary
            skillPoints={props.skillPoints}
            disabled={ props.skillPoints === 0 }
            isEditable
            data={ props.world }
            onIncrement={(d)=>{props.onIncrement(d) && props.decrementBackgroundSkill()}}
            onDecrement={(d)=>{props.onDecrement(d) && props.incrementBackgroundSkill()}}
            characterSkills={props.characterSkills}/>
        }
        footer={
          <BtnGroup>
            <Btn type="secondary" text="Accept Skills" disabled={typeof props.skillPoints === "number" && props.skillPoints > 0} onClick={ ()=>{ props.onUpdate && props.onUpdate(); } }/>
          </BtnGroup>
        }/>
      <ContainerTitle text="World Generator (Traveller)" />
    </div>
  );
};

module.exports = BackgroundSkillSelectionContainer;
