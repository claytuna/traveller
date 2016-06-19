var StatsService = require('services/StatsService');

var StatsWidget = require('components/display/StatsWidget');
var ContainerTitle = require("components/display/ContainerTitle");
var Loading = require("components/display/Loading");

module.exports = class StatsWidgetContainer extends Core {
	render(){
		return (
				<div>
					<StatsWidget/>
					<ContainerTitle text="Characteristics/Stats Summary" />
				</div>
		);
	}
};
