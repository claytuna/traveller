require("./FieldGroup.less");

 const FieldGroup = props => {
    //var props = _.omit(props, ['label', 'fields']);
    return (
      <div className="field-group">
        { props.label && <label htmlFor="">{props.label}</label>}
        { props.children }
      </div>
    );
}

module.exports = FieldGroup;
