import React from "react";
import { MathService as MS } from "../../../services";
import "./PlanetDiagram.less";

function randRGB() {
  return MS.random(255, 0);
}

function randomColor() {
  const r1 = randRGB();
  const g1 = randRGB();
  const b1 = randRGB();
  const r2 = randRGB();
  const g2 = randRGB();
  const b2 = randRGB();
  const color1 = `rgb(${r1}, ${g1}, ${b1})`;
  const color2 = `rgb(${r2}, ${g2}, ${b2})`;
  const baseColor =
    MS.sum([r1, g1, b1]) <= MS.sum([r2, g2, b2]) ? color2 : color1;
  const secondaryColor =
    MS.sum([r1, g1, b1]) <= MS.sum([r2, g2, b2]) ? color1 : color2;

  return {
    backgroundColor: baseColor,
    //   background: `-moz-radial-gradient(34%, 34%, ellipse cover, ${baseColor} 0%, ${secondaryColor} 100%)`,
    background: `radial-gradient(34% 34%, ellipse, ${baseColor} 0%, ${secondaryColor} 100%)`,
    //   background: `-webkit-radial-gradient(34% 34%, ${baseColor} 0%, ${secondaryColor} 100%)`,
    filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr="${baseColor}", endColorstr="${secondaryColor}", GradientType=1 )`,
  };
}

function scrubClassName(val: string) {
  return `is-${val.toLowerCase().replace(/[ ,><;.-]/g, "-")}`;
}

export const PlanetDiagram = (props: PlanetDiagramProps) => {
  const { size, atmosphere, temperature, hydrosphere } = props;

  const classNames = [
    size?.name ? scrubClassName(`size-${size.name}`) : "",
    atmosphere?.desc ? scrubClassName(`atm-${atmosphere.desc}`) : "",
    temperature?.name ? scrubClassName(`temp-${temperature.name}`) : "",
    hydrosphere?.name ? scrubClassName(hydrosphere.name) : "",
  ];

  return (
    <div className="planet-diagram planet-diagram--traveller">
      <span>Planet Diagram:</span>
      <div className="planet-diagram__grid">
        <div
          className={`"planet-diagram__planet ${classNames.join(" ")}`}
          style={randomColor()}
        />
        <div className="planet-diagram__temperature" />
        <div className="hydrographics" />
      </div>
    </div>
  );
};
export type PlanetObject = {
  name: string;
  desc: string;
};
export interface PlanetDiagramProps {
  size: PlanetObject;
  atmosphere: PlanetObject;
  temperature: PlanetObject;
  hydrosphere: PlanetObject;
}
