var RR = require('react-router');
var App = require('components/App');

module.exports = class Router extends Core {
	render(){
		return (
			<RR.Router history={history}>
				<RR.Route path="http://localhost/CHAR/index.php/app" component={App}/>
			</RR.Router>
		);
	}
};
