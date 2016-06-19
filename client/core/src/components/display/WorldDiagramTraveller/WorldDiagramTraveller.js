var MS = require("services/MathService");

require("./WorldDiagramTraveller.less");

module.exports = (props) => {
	var cssModel = "world-diagram__planet";

	testProp('size.name') && updateCssModel(`size-${props.size.name}`);
	testProp('atmosphere.desc') && updateCssModel(`atm-${props.atmosphere.desc}`);
	testProp('temperature.name') && updateCssModel(`temp-${props.temperature.name}`);
	testProp('hydrosphere.name') && updateCssModel(props.hydrosphere.name);

	return (
		<div className="world-diagram world-diagram--traveller">
			<span>Planet Diagram:</span>
			<div className="world-diagram__grid">
				<div className={cssModel} style={randomColor()} />
				<div className="world-diagram__temperature" />
				<div className="hydrographics" />
			</div>
		</div>
	);

	function randomColor(){
		let r1 = randRGB();
		let g1 = randRGB();
		let b1 = randRGB();
		let r2 = randRGB();
		let g2 = randRGB();
		let b2 = randRGB();
		let color1 = `rgb(${r1}, ${g1}, ${b1})`;
		let color2 = `rgb(${r2}, ${g2}, ${b2})`;
		let baseColor = MS.sum([r1, g1, b1]) <= MS.sum([r2, g2, b2]) ? color2 : color1;
		let secondaryColor = MS.sum([r1, g1, b1]) <= MS.sum([r2, g2, b2]) ? color1 : color2;

		return ({
			//backgroundColor: baseColor,
			background: `-moz-radial-gradient(34%, 34%, ellipse cover, ${baseColor} 0%, ${secondaryColor} 100%)`,
			background: `radial-gradient(34% 34%, ellipse, ${baseColor} 0%, ${secondaryColor} 100%)`,
			background: `-webkit-radial-gradient(34% 34%, ${baseColor} 0%, ${secondaryColor} 100%)`,
			filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#7db9e8", endColorstr="#1e5799", GradientType=1 )'
		});

		function randRGB(){
			return MS.random(255, 0);
		}
	}

	function testProp(testStr){
		return _.hasIn(props, testStr);
	}

	function updateCssModel(update){
		cssModel = `${cssModel} ${scrub(update)}`;

		function scrub(val){
			return `is-${val.toLowerCase().replace(/[ ,><;.-]/g, '-')}`;
		}
	}
};
