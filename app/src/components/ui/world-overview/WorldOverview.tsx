import React from "react";
// TODO: import {WorldGeneratorObject} from "../../../services/TravellerWorldService";
import { Row, Col } from "../../layout";
import { Card, DatumGroup, PlanetDiagram } from "../";

export const WorldOverview = ({ data, ...props }: WorldOverviewProps) => {
  return (
    data && (
      <Card
        title={<p>World Details:</p>}
        body={
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12} sm={6}>
                  <DatumGroup title="Name" value={data.name} />
                  <DatumGroup title="Univeral world profile" value={data.uwp} />
                  <Card
                    title="Physical Attributes:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title="Size"
                          value={data.size.name + " (" + data.size.desc + ")"}
                        />
                        <DatumGroup
                          title="Diameter (km)"
                          value={data.size.values.diameter}
                          hasComma
                        />
                        <DatumGroup
                          title="Atmosphere"
                          value={
                            data.atmosphere.name +
                            " (" +
                            data.atmosphere.desc +
                            ")"
                          }
                        />
                        <DatumGroup
                          title="Temperature"
                          value={
                            data.temperature.name +
                            " (" +
                            data.temperature.desc +
                            ")"
                          }
                        />
                        <DatumGroup
                          title="Temp. range"
                          value={
                            "Max:(" +
                            data.temperature.values.maxTemp +
                            ") Min:(" +
                            data.temperature.values.minTemp +
                            ")"
                          }
                        />
                        <DatumGroup
                          title="Hydrosphere"
                          value={
                            data.hydrosphere.name +
                            " (" +
                            data.hydrosphere.desc +
                            ")"
                          }
                        />
                      </div>
                    }
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <PlanetDiagram {...data} />
                  <Card
                    title="Population:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title="Level"
                          value={
                            data.population.name +
                            " (" +
                            data.population.desc +
                            ")"
                          }
                        />
                        <DatumGroup
                          title="Total"
                          value={data.population.values.total}
                          hasComma
                        />
                      </div>
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Card
                    title="Starport:"
                    isSecondary
                    body={
                      <Row>
                        <Col xs={12} sm={4}>
                          <DatumGroup
                            title="Type"
                            value={
                              data.starport.name + " - " + data.starport.desc
                            }
                          />
                          <DatumGroup
                            title="Berthing cost"
                            value={data.starport.values.berthingCost + " (Cr.)"}
                          />
                          <DatumGroup
                            title="Fuel"
                            value={data.starport.values.fuel}
                          />
                        </Col>
                        <Col xs={12} sm={8}>
                          <DatumGroup
                            title="Facilities"
                            value={data.starport.values.facilities}
                          />
                          <DatumGroup
                            title="Bases"
                            value={data.starport.values.bases.map(
                              (s: string) => "(" + s + ") "
                            )}
                          />
                        </Col>
                      </Row>
                    }
                  />

                  <Card
                    title="Technology:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title="Level"
                          value={data.technologyLevel.name}
                        />
                        <DatumGroup
                          title="Description"
                          value={data.technologyLevel.desc}
                        />
                        {data.atmosphericWarning && (
                          <DatumGroup
                            title="WARNING"
                            value="This planet has a technology level that is below the limit required to maintain and repair life support systems, given the atmospheric environment. Any colony here is likely doomed."
                          />
                        )}
                        <DatumGroup
                          title="Communications"
                          value={
                            data.communications.name +
                            " - " +
                            data.communications.desc
                          }
                        />
                        {data.travelCodes && (
                          <DatumGroup
                            title="Travel Code"
                            value={
                              data.travelCodes.name +
                              " - " +
                              data.travelCodes.desc
                            }
                          />
                        )}
                      </div>
                    }
                  />

                  <Card
                    title="Government:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title="Primary"
                          value={
                            data.governments.name +
                            " - " +
                            data.governments.desc +
                            " (e.g. " +
                            data.governments.values.examples +
                            ")"
                          }
                        />
                        {data.factions &&
                          data.factions.map(
                            (
                              faction: {
                                name: string;
                                desc: string;
                                values: { govt: { desc: string } };
                              },
                              index: number
                            ) => {
                              return (
                                <DatumGroup
                                  title="Faction"
                                  key={"faction" + index}
                                  value={
                                    faction.name +
                                    " (" +
                                    faction.desc +
                                    "). " +
                                    faction.values.govt.desc
                                  }
                                />
                              );
                            }
                          )}
                      </div>
                    }
                  />

                  <Card
                    title="Cultural Differences:"
                    isSecondary
                    body={
                      <div>
                        <DatumGroup
                          title={data.culture.name}
                          value={data.culture.desc}
                        />
                      </div>
                    }
                  />

                  <Card
                    title={
                      "Law Level - " + data.laws.name + " (Illegal/contraband):"
                    }
                    isSecondary
                    body={
                      <Row>
                        <Col xs={12} md={6}>
                          <DatumGroup
                            title="Weapons"
                            value={data.laws.values.weapons}
                          />
                          <DatumGroup
                            title="Drugs"
                            value={data.laws.values.drugs}
                          />
                          <DatumGroup
                            title="Information"
                            value={data.laws.values.information}
                          />
                          <DatumGroup
                            title="Technology"
                            value={data.laws.values.technology}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <DatumGroup
                            title="Travellers"
                            value={data.laws.values.travellers}
                          />
                          <DatumGroup
                            title="Psionics"
                            value={data.laws.values.psionics}
                          />
                        </Col>
                      </Row>
                    }
                  />

                  <Card
                    title="Trade:"
                    isSecondary
                    body={
                      <div>
                        {data.tradeCodes &&
                          data.tradeCodes.map(
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
  data: any;
}
