var React = require("react");
require("./TextField.less");

class TextField extends React.Component {

  handleChange(event) {
    this.props.onUpdate && this.props.onUpdate(this.props.formName, this.props.fieldName, event.target.value);
	}

  render() {
    return (
      <input className="text-field"
        defaultValue={this.props.value}
        type="text"
        onChange={this.handleChange.bind(this)}
        onBlur={this.handleChange.bind(this)}
        {..._.omit(this.props, ['formName', 'fieldName', 'onUpdate'])}/>
    );
  }
}

module.exports = TextField;
