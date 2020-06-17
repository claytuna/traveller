import React from "react";
import { WorldGeneratorObject } from "../../../../services";
import { Row, Col } from "../../../layout";
import { Card, DatumGroup, PlanetDiagram } from "../../../ui";

export const WorldOverview = ({ world }: WorldOverviewProps) => {
  return (
    world && (
      <Card
        title={<p>World Overview:</p>}
        body={
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12} sm={6}>
                  <DatumGroup title="Name" value={world.name} />
                  <DatumGroup
                    title="Univeral world profile"
                    value={world.uwp}
                  />
                  <Card
                    title="Physical Attributes:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title="Size"
                          value={world.size.name + " (" + world.size.desc + ")"}
                        />
                        <DatumGroup
                          title="Diameter (km)"
                          value={world.size.values.diameter}
                          hasComma
                        />
                        <DatumGroup
                          title="Atmosphere"
                          value={
                            world.atmosphere.name +
                            " (" +
                            world.atmosphere.desc +
                            ")"
                          }
                        />
                        <DatumGroup
                          title="Temperature"
                          value={
                            world.temperature.name +
                            " (" +
                            world.temperature.desc +
                            ")"
                          }
                        />
                        <DatumGroup
                          title="Temp. range"
                          value={
                            "Max:(" +
                            world.temperature.values.maxTemp +
                            ") Min:(" +
                            world.temperature.values.minTemp +
                            ")"
                          }
                        />
                        <DatumGroup
                          title="Hydrosphere"
                          value={
                            world.hydrosphere.name +
                            " (" +
                            world.hydrosphere.desc +
                            ")"
                          }
                        />
                      </div>
                    }
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <PlanetDiagram {...world} />
                  <Card
                    title="Population:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title="Level"
                          value={
                            world.population.name +
                            " (" +
                            world.population.desc +
                            ")"
                          }
                        />
                        <DatumGroup
                          title="Total"
                          value={world.population.values.total}
                          hasComma
                        />
                      </div>
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={3}>
                  <Card
                    title="Starport:"
                    isSecondary
                    body={
                      <Row>
                        <Col xs={12} sm={4}>
                          <DatumGroup
                            title="Type"
                            value={
                              world.starport.name + " - " + world.starport.desc
                            }
                          />
                          <DatumGroup
                            title="Berthing cost"
                            value={
                              world.starport.values.berthingCost + " (Cr.)"
                            }
                          />
                          <DatumGroup
                            title="Fuel"
                            value={world.starport.values.fuel}
                          />
                        </Col>
                        <Col xs={12} sm={8}>
                          <DatumGroup
                            title="Facilities"
                            value={world.starport.values.facilities}
                          />
                          <DatumGroup
                            title="Bases"
                            value={world.starport.values.bases
                              .map((s: string) => "(" + s + ") ")
                              .join("")}
                          />
                        </Col>
                      </Row>
                    }
                  />
                </Col>
                <Col sm={3}>
                  <Card
                    title="Technology:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title="Level"
                          value={world.technologyLevel.name}
                        />
                        <DatumGroup
                          title="Description"
                          value={world.technologyLevel.desc}
                        />
                        {world.atmosphericWarning && (
                          <DatumGroup
                            title="WARNING"
                            value="This planet has a technology level that is below the limit required to maintain and repair life support systems, given the atmospheric environment. Any colony here is likely doomed."
                          />
                        )}
                        <DatumGroup
                          title="Communications"
                          value={
                            world.communications.name +
                            " - " +
                            world.communications.desc
                          }
                        />
                        {world.travelCodes && (
                          <DatumGroup
                            title="Travel Code"
                            value={
                              world.travelCodes.name +
                              " - " +
                              world.travelCodes.desc
                            }
                          />
                        )}
                      </div>
                    }
                  />
                </Col>
                <Col sm={3}>
                  <Card
                    title="Government:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title="Primary"
                          value={
                            world.governments.name +
                            " - " +
                            world.governments.desc +
                            " (e.g. " +
                            world.governments.values.examples +
                            ")"
                          }
                        />
                        {world.factions &&
                          world.factions.map((faction, index: number) => {
                            return (
                              <DatumGroup
                                title="Faction"
                                key={"faction" + index}
                                value={
                                  faction.name +
                                  " (" +
                                  faction.desc +
                                  "). " +
                                  faction.values.govt?.desc
                                }
                              />
                            );
                          })}
                      </div>
                    }
                  />
                </Col>
                <Col sm={3}>
                  <Card
                    title="Cultural Differences:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title={world.culture.name}
                          value={world.culture.desc}
                        />
                      </div>
                    }
                  />
                </Col>
                <Col sm={3}>
                  <Card
                    title={
                      "Law Level - " +
                      world.laws.name +
                      " (Illegal/contraband):"
                    }
                    isSecondary
                    body={
                      <Row>
                        <Col xs={12} md={6}>
                          <DatumGroup
                            title="Weapons"
                            value={world.laws.values.weapons}
                          />
                          <DatumGroup
                            title="Drugs"
                            value={world.laws.values.drugs}
                          />
                          <DatumGroup
                            title="Information"
                            value={world.laws.values.information}
                          />
                          <DatumGroup
                            title="Technology"
                            value={world.laws.values.technology}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <DatumGroup
                            title="Travellers"
                            value={world.laws.values.travellers}
                          />
                          <DatumGroup
                            title="Psionics"
                            value={world.laws.values.psionics}
                          />
                        </Col>
                      </Row>
                    }
                  />
                </Col>
                <Col sm={3}>
                  <Card
                    title="Trade:"
                    isSecondary
                    body={
                      <div>
                        {world.tradeCodes &&
                          world.tradeCodes.map(
                            (
                              tradeCode: { name: string; desc: string },
                              index: number
                            ) => (
                              <DatumGroup
                                key={"trade" + index}
                                title={tradeCode.name}
                                value={tradeCode.desc}
                              />
                            )
                          )}
                      </div>
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        }
      />
    )
  );
};

export interface WorldOverviewProps {
  world: WorldGeneratorObject;
}
