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

	render(){ //console.log(this.props)
		return (
			<div className="app">
				<Header
					onRestart={ ()=>{this.props.dispatch(this.props.actions.appRestart())} }
					onSave={ ()=>{this.props.dispatch(this.props.actions.appSave())} }/>
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
