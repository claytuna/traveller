var React = require("react");
require("./SelectField.less");

class SelectField extends React.Component {

  handleChange( event ) {
    this.props.onUpdate && this.props.onUpdate(this.props.formName, this.props.fieldName, event.target.value);
	}

  render() {
    return (
      <select
        className="select-field"
        defaultValue={this.props.value || this.props.options[0].value}
        onChange={this.handleChange.bind(this)}
        {..._.omit(this.props, ['formName', 'fieldName', 'onUpdate', 'options'])}>
        {
          this.props.options && _.map(this.props.options, (o)=><option key={_.uniqueId() + o.value} value={o.value}>{o.text}</option>)
        }
      </select>
    );
  }
}

module.exports = SelectField;
