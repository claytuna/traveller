var RR = require('react-router');
var App = require('components/App');
import { Component } from "react";

module.exports = class Router extends Component {
	render(){
		return (
			<RR.Router history={history}>
				<RR.Route path="http://localhost/CHAR/index.php/app" component={App}/>
			</RR.Router>
		);
	}
};
