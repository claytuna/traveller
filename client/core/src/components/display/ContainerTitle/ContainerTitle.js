var React = require('react');
require("./ContainerTitle.less");

module.exports = class ContainerTitle extends React.Component {
	render(){
		return (
			<p className="container-title">
				{ this.props.text }
			</p>
		);
	}
}
