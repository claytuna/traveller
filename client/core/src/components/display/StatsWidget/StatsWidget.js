var StatsService = require('services/StatsService');
var CharacterService = require("services/CharacterService");
var DiceRollService = require("services/DiceRollService");
var MS = require("services/MathService");

var Card = require('components/display/Card');
var BtnGroup = require("components/display/BtnGroup");
var Btn = require("components/display/Btn");
var DiceRoll = require("components/display/DiceRoll");
var DatumGroup = require("components/display/DatumGroup");
var FieldGroup = require("components/display/FieldGroup");
var SelectField = require("components/display/SelectField");
var TextField = require("components/display/TextField");

module.exports = class StatsWidget extends CorePure {

	constructor(){
		super();
		this.values = [];
	}

	componentWillMount(){
		this.registerStoreKey('statRollType', 'rolltype');

		this.autorun(clearValues);

		function clearValues(){
			var srt = RS.get('statRollType');
			this.setState({rolls:undefined, rolled: false});
		}
	}

	rollStats(){
		var rollMatrix = makeMatrix([6,6]);
		this.values = [];
		this.setState({rolls:undefined, rolled: false});

		switch (this.state.rolltype) {
			case 'keepHighest':
			rollMatrix = makeMatrix([6,6,6]);
			break;

			case 'keepNth':
			rollMatrix = makeMatrix([6,6,6,6]);
			break;

			default:
			rollMatrix = makeMatrix([6,6]);
			break;
		}

		this.setState({rolls: rollMatrix, rolled: true});

		function makeMatrix(vals){
			return _.map(['STR','DEX','END','INT','EDU','SOC'], (stat)=>({ name: stat, rolls:vals }));
		}
	}

	saveStats(){
		CharacterService.setStats(this.values);
	}

	render(){
		var isStatRolled = this.state.rolled === true && this.state.rolltype;
		return (
		<Card
			title={<p>Characteristics:</p>}
			body={
				<Row>
					<Col xs={12} sm={6}>
						<Card title="Current Characteristics" secondary
							body={
								<Row>
								 	{(isStatRolled) ? getRolls.call(this) : <Col xs={12}><p>Roll for stats below.</p></Col> }
								</Row>
							}/>
					</Col>
					<Col xs={12} sm={6}>
						<FieldGroup label="Change the rolling scheme">
							<SelectField rsKey="statRollType"
								options={[ {value:"default", text:"2d6 - Default"}, {value:"keepHighest", text:"3d6 - Keep highest 2"}, {value:"keepNth", text:"4d6 - Keep 1st and 3rd"} ]}/>
						</FieldGroup>
					</Col>
				</Row>
			}
			footer={<BtnGroup noMargin>
				<Btn text="Roll Stats" type="secondary" onClick={this.rollStats.bind(this)}/>
				{ isStatRolled && <Btn text="Accept Stats" type="tertiary" onClick={this.saveStats.bind(this)}/> }
			</BtnGroup>}/>
		);

		function getRolls(srt){
			return _.map(this.state.rolls, (obj) => {
				var curRoll;
				switch (this.state.rolltype) {
					case 'keepHighest':
					curRoll = MS.sum(DiceRollService.rollDiceKeepHighest(2, obj.rolls));
					break;

					case 'keepNth':
					curRoll = MS.sum(DiceRollService.rollDiceKeepNth([0, 2], obj.rolls));
					break;

					default:
					curRoll = DiceRollService.roll(obj.rolls);
					break;
				}
				this.values.push(curRoll);
				return ( <Col xs={12} md={6} key={'roll-' + obj.name}><DatumGroup title={obj.name} value={curRoll} countable/></Col> );
			});
		}
	}
};
