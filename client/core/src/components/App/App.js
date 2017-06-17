var AppService = require('services/AppService');

var StaticRightSidebar = require('components/layout/StaticRightSidebar');
var Header = require('components/display/Header');
var CharacterGenerationContainer = require('components/container/CharacterGenerationContainer');
var CharacterSummaryWidgetContainer = require('components/container/CharacterSummaryWidgetContainer');
var React = require("react");

require("./App.less");

class App extends React.Component {

	componentDidMount(){
		AppService.init();
	}

	render(){
		return (
			<div className="app">
				<Header />
				<div className="app__content">
					<StaticRightSidebar>
						<CharacterGenerationContainer {...this.props}/>
						<CharacterSummaryWidgetContainer {...this.props}/>
					</StaticRightSidebar>
				</div>
			</div>
		);
	}
};

module.exports = App;
