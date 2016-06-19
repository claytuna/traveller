require("./BtnGroup.less");

module.exports = class BtnGroup extends CorePure {
	render(){
		var css = this.props.noMargin ? 'btngroup--no-margin': '';
		return (
			<div className={`btngroup ${css}`}>
				{ this.props.children }
			</div>
		);
	}
}
