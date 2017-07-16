var React = require('react');
require("./BtnGroup.less");

module.exports = class BtnGroup extends React.Component {
	render(){
		var css = this.props.noMargin ? 'btngroup--no-margin': '';
		return (
			<div className={`btngroup ${css}`}>
				{ this.props.children }
			</div>
		);
	}
}
