import React from "react";
import { DatumGroup, Card } from "../";
import { Col, Row } from "../../layout";

interface Stats {
  value: string;
  modifier: string;
}

function showStats(stats: Stats[]) {
  return (
    <Col xs={12}>
      <Card
        title="Characteristics"
        isSecondary
        body={
          <Row>
            {stats.map((obj, idx) => (
              <Col xs={6} lg={4} key={"roll-" + idx}>
                <DatumGroup
                  title={idx}
                  value={obj.value + " (" + obj.modifier + ")"}
                />
              </Col>
            ))}
          </Row>
        }
      />
    </Col>
  );
}

interface HomeWorld {
  uwp: string;
  starport: { name: string };
}

function showHomeworld(homeworld: HomeWorld) {
  return (
    <Col xs={12}>
      <Card
        title="Homeworld"
        isSecondary
        body={
          <Row>
            <Col xs={12}>
              <DatumGroup title="UWP" value={homeworld.uwp} />
              <DatumGroup title="Starport" value={homeworld.starport.name} />
            </Col>
          </Row>
        }
      />
    </Col>
  );
}

export const CharacterSummaryWidget = ({
  data,
}: {
  data: { name: string; stats: Stats[]; homeworld: HomeWorld };
}) => {
  return (
    <Card
      title={<p>Character Summary:</p>}
      body={
        <Row>
          <Col xs={12}>
            <DatumGroup title="Name" value={data.name} />
          </Col>
          {data.stats && showStats(data.stats)}
          {data.homeworld && showHomeworld(data.homeworld)}
        </Row>
      }
      footer={<p>Show history...</p>}
    />
  );
};
