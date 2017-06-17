module.exports = props => {
	var filterProps = _.omit(props, ['text']);
	let id = _.uniqueId();

	function handleChange(event) { console.log(event);
    this.props.onUpdate && this.props.onUpdate(this.props.formName, this.props.fieldName, this.props.value);
	}

	return (
		<label
			{...filterProps}
			onClick={handleChange.bind(this)}
			htmlFor={id}>
				<input type="checkbox" id={id}/>
				{ props.text }
		</label>
	);
};
