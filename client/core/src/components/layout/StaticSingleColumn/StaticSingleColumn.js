import { Component } from "react";
class StaticSingleColumn extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render(){
		return (
			<Grid>
				<Row>
				<Col xs={12}>
					<p>StaticSingleColumn:</p>
					{ this.props.children }
				</Col>
				</Row>
			</Grid>
		);
	}
};

module.exports = StaticSingleColumn;
