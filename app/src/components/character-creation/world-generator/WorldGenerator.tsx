import React, { useContext, useState } from "react";
import { StateContext } from "../../../App";
import { TravellerWorldService, WorldGeneratorObject } from "../../../services";
import { ButtonGroup, Button, Card } from "../../ui";
import { WorldOverview } from "./world-overview";
import { BackgroundSkillSummary } from "./background-skills-summary";

export const WorldGenerator = () => {
  const { actions, dispatch } = useContext(StateContext);
  const [currentWorld, setCurrentWorld] = useState<WorldGeneratorObject>(
    TravellerWorldService.generate()
  );
  console.log(actions, dispatch);
  return (
    <div data-testid="WorldGenerator">
      <Card
        title="Current Background Skills"
        footer={
          <ButtonGroup noMargin>
            <Button
              priority="secondary"
              onClick={() => {
                setCurrentWorld(TravellerWorldService.generate());
              }}
            >
              New homeworld
            </Button>
            <Button priority="primary" disabled>
              Accept homeworld
            </Button>
          </ButtonGroup>
        }
      >
        <BackgroundSkillSummary
          world={currentWorld}
          characterSkills={[]}
          isEditable={false}
          skillPoints={0}
          onDecrement={() => {}}
          onIncrement={() => {}}
        />
      </Card>
      <WorldOverview world={currentWorld} />
    </div>
  );
};
