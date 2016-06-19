var Datum = require("components/display/Datum");
require("./DatumGroup.less");

module.exports = (props) => {
	var nProps = _.omit(props, 'title');
	return <p className="datum-group" title={props.title + ':' + props.value}><span className="datum-group__title">{props.title}</span>: {props.value && <Datum {...nProps} />}</p>
}
