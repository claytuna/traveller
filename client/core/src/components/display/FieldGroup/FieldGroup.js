require("./FieldGroup.less");

module.exports = class FieldGroup extends Core {
  render() {
    var props = _.omit(props, ['label', 'fields']);
    return (
      <div className="field-group">
        { this.props.label && <label for="">{this.props.label}</label>}
        { this.props.children }
      </div>
    );
  }
}
