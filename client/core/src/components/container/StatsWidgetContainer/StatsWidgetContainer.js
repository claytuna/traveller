var StatsService = require('services/StatsService');

var StatsWidget = require('components/display/StatsWidget');
var ContainerTitle = require("components/display/ContainerTitle");

const StatsWidgetContainer = props => {
	return (
			<div>
				<StatsWidget {...props}/>
				<ContainerTitle text="Characteristics/Stats Summary" />
			</div>
	);
};

module.exports = StatsWidgetContainer
