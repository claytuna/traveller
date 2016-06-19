require("./WorldDiagram.less");

module.exports = (props) => { console.log(props);
	var cssModel = "world-diagram__planet";
	
	testProp('atmosphere.children[0].name') && updateCssModel(props.atmosphere.children[0].name);
	testProp('atmosphere.children[1].name') && updateCssModel(props.atmosphere.children[1].name);
	testProp('size.name') && updateCssModel(props.size.name);
	testProp('hydrosphere.name') && updateCssModel(props.hydrosphere.name);	
	
	return (
		<div className="world-diagram">
			<span>Planet Diagram:</span>
			<div className={cssModel} style={randomColor()}>
				<div className="world-diagram__hydro" />
			</div>
		</div>
	);
	
	function randomColor(){
		return ({
			background:'rgb(170,225,188)',
			backgroundImage:'linear-gradient(to bottom, rgb(170,225,188), rgb(232,88,122))'
		});
	}
	
	function testProp(testStr){ 
		return _.hasIn(props, testStr);
	}
	
	function updateCssModel(update){
		cssModel = `${cssModel} ${scrub(update)}`;
		
		function scrub(val){
			return `is-${val.toLowerCase().replace(/ /, '-')}`;
		}
	}
};
