var AppService = require('services/AppService');

var StaticRightSidebar = require('components/layout/StaticRightSidebar');
var Header = require('components/display/Header');
var CharacterGenerationContainer = require('components/container/CharacterGenerationContainer');
var CharacterSummaryWidgetContainer = require('components/container/CharacterSummaryWidgetContainer');

require("./App.less");

module.exports = class App extends Core {

	componentDidMount(){
		AppService.init();
	}

	render(){
		return (
			<div className="app">
				<Header />
				<div className="app__content">
					<StaticRightSidebar>
						<CharacterGenerationContainer />
						<CharacterSummaryWidgetContainer />
					</StaticRightSidebar>
				</div>
			</div>
		);
	}
};
