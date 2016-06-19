module.exports = class StaticRightSidebar extends CorePure {
	
	shouldComponentUpdate(nextProps) {
		return false;
	}
	
	render(){
		return (
			<Grid>
				<Row>
				<Col xs={12} sm={7}>
					{ this.props.children[0] }
				</Col>
				<Col xs={12} sm={5}>
					{ this.props.children[1] }
				</Col>
				</Row>
			</Grid>
		);
	}
};
