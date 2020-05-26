import React, { useContext, useState } from "react";
import { StateContext } from "../../../App";
import { TravellerWorldService, WorldGeneratorObject } from "../../../services";
import { ButtonGroup, Button, Card } from "../../ui";
import { WorldOverview } from "./world-overview";
import { BackgroundSkillSummary } from "./background-skills-summary";

export const WorldGenerator = () => {
  const { actions, dispatch, characterCreation } = useContext(StateContext);
  const [currentWorld, setCurrentWorld] = useState<WorldGeneratorObject>(
    TravellerWorldService.generate()
  );
  const { skills, availableSkillCount, homeworld } = characterCreation;
  return (
    <div data-testid="WorldGenerator">
      <Card
        title="Current Background Skills"
        footer={
          <ButtonGroup noMargin>
            <Button
              priority="secondary"
              disabled={homeworld ? true : false}
              onClick={() => {
                setCurrentWorld(TravellerWorldService.generate());
              }}
            >
              Re-roll
            </Button>
            <Button
              priority="primary"
              disabled={homeworld ? true : false}
              onClick={() => {
                dispatch(actions.updateHomeworld(currentWorld));
              }}
            >
              Accept homeworld
            </Button>
          </ButtonGroup>
        }
      >
        <BackgroundSkillSummary
          world={currentWorld}
          characterSkills={skills || {}}
          isEditable={
            availableSkillCount && availableSkillCount > 0 ? true : false
          }
          skillPoints={availableSkillCount || 0}
          onDecrement={(skillKey) => {
            if (availableSkillCount !== undefined) {
              dispatch(actions.setAvailableSkillCount(availableSkillCount + 1));
              dispatch(actions.decrementSkill(skillKey));
            }
          }}
          onIncrement={(skillKey) => {
            if (availableSkillCount !== undefined && availableSkillCount > 0) {
              dispatch(actions.setAvailableSkillCount(availableSkillCount - 1));
              dispatch(actions.incrementSkill(skillKey));
            }
          }}
        />
      </Card>
      <WorldOverview world={currentWorld} />
    </div>
  );
};
