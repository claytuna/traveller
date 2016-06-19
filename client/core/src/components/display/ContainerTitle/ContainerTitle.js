require("./ContainerTitle.less");

module.exports = class ContainerTitle extends CorePure {
	render(){
		return (
			<p className="container-title">
				{ this.props.text }
			</p>
		);
	}
}
