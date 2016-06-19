var Datum = require("components/display/Datum");
require("./DatumList.less");

module.exports = (props) => {
	var nProps = _.omit(props, 'title');
	return (
		<ul className="datum-list">
			{ props.title && <li className="datum-list__title"><p title={props.title}>{props.title}</p></li> }
			{ typeof props.values === 'array' && _.map(props.values, (v, id)=><li key={_.uniqueId('-datum-list')}><Datum value={v}/></li>) }
		</ul>
	);
}
