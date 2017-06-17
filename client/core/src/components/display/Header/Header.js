var BtnGroup = require("components/display/BtnGroup");
var Btn = require("components/display/Btn");
require("./Header.less");

module.exports = props => {
	return (
		<div className="header">
			<Grid>
				<Row>
				<Col xs={12} sm={6}>
					<h1 className="header__title">Character Generator (Traveller)</h1>
				</Col>
				<Col xs={12} sm={6}>
					<div className="pull-right">
						<BtnGroup>
							<Btn text="Start over"/>
							<Btn text="Save" type="secondary"/>
						</BtnGroup>
					</div>
				</Col>
				</Row>
			</Grid>
		</div>
	);
};
